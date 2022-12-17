from flask import Flask, g, request, make_response, jsonify, session
import os
import functools
from werkzeug.security import generate_password_hash, check_password_hash

from flask_cors import CORS, cross_origin

from dotenv import load_dotenv
import requests
import json

import yfinance as yf
import pandas as pd
from datetime import datetime

from database import query_db, connect_to_db

load_dotenv('.env')
API_KEY = os.getenv('API_KEY')

app = Flask(__name__)
cors = CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'

class Config:
    DATABASE_NAME = "database.db"
    SECRET_KEY = os.urandom(12).hex()
    HASH_TYPE = "sha256"

app.config['SECRET_KEY'] = Config.SECRET_KEY

def db_write(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        g.conn.commit()
    return wrapper

@app.before_request
def before_request():
    # create database connection before every request
    g.conn = connect_to_db(Config.DATABASE_NAME)
    if 'user_id' in session:
        g.user = query_db(g.conn, 'select * from user where user_id = ?', [session['user_id']])
        if g.user is not None:
            g.user = g.user[0]
    else:
        g.user = None
    
@app.teardown_request
def teardown_request(_):
    # close database connection at the end of every request
    if g.conn is not None:
        g.conn.close()

@db_write
def insert_user(username, password):
    g.conn.execute("insert into user (username, password_hash) values (?, ?)",
                   [username, password])

@app.route('/signup', methods=['POST'])
# @cross_origin(supports_credentials=True, headers=['Content-Type', 'Authorization'])
def signup():
    data = request.data
    # data = data.decode('utf-8')
    data = json.loads(data)
    username = data['username']
    userdata = query_db(g.conn, 'select * from user where username = ?', [username])
    if userdata is None:
        password_hash = generate_password_hash(str(data['password']), Config.HASH_TYPE)
        insert_user(username, password_hash)
        resp = make_response("User created!", 201)
        # resp.headers.add("Access-Control-Allow-Origin", "*")
        # resp.headers.add("Access-Control-Allow-Headers", "*")
        # resp.headers.add("Access-Control-Allow-Methods", "*")
        return resp
    else:
        resp = make_response("Username exists", 400)
        print("Username exists")
        # resp.headers.add("Access-Control-Allow-Origin", "*")
        # resp.headers.add("Access-Control-Allow-Headers", "*")
        # resp.headers.add("Access-Control-Allow-Methods", "*")
        return resp

@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data = request.data
    data = json.loads(data)
    username = data['username']
    userdata = query_db(g.conn, 'select * from user where username = ?', [username])
    if userdata is None:
        resp = make_response("User does not exist!", 400)
        print("User does not exist!")
        return resp
    else:
        userdata = userdata[0]
        password = data['password']
        if password is not None:
            if check_password_hash(userdata['password_hash'], password):
                session['user_id'] = userdata['user_id']
                g.conn.commit()
                resp = make_response("Logged in!", 202)
                return resp 
            else:
                resp = make_response("Password is incorrect!", 400)
                print("Password is incorrect")

                return resp
        else:
            resp = make_response("Please enter a password!", 400)
            print("Did not enter password yet!")

            return resp

@app.route('/get_userdata', methods=['GET'])
def get_userdata():
    if 'user_id' not in session:
        resp = make_response("Not logged in!", 400)
        print("Not logged in!")
        return resp
    return jsonify(username=session['user_id']['username'])

@app.route('/get_stock/', methods=['GET'])
def stock():
    args = request.args
    ticker = args.get('ticker')

    stock_end = datetime.now()
    stock_start = datetime(stock_end.year, stock_end.month, stock_end.day-10)

    data = yf.download(ticker, stock_start, stock_end)
    data = pd.DataFrame(data)
    data = list(data['Close'].values) # extract the closing prices

    return jsonify(company=ticker, prices=data)

@app.route('/get_news/', methods=['GET'])
def news():
    args = request.args
    ticker = args.get('ticker')
    data = requests.get(f"https://newsapi.org/v2/everything?q={ticker}&sortBy=publishedAt&apiKey={API_KEY}")
    data = json.loads(data.content)
    data_articles = data["articles"]

    filtered_articles = []

    for article in data_articles:
        filtered_article = {}
        for key in ["author", "description", "title", "url", "urlToImage"]:
            filtered_article[key] = article[key]
        filtered_articles.append(filtered_article)

    return jsonify(company=ticker, articles=filtered_articles)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)