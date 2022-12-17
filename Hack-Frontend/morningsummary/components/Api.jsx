import React from "react";

const Api = () => {
  const getuserdata = () => {
    fetch("http://127.0.0.1:8000/get_userdata", {
      method: "GET",
      //   body: JSON.stringify({
      //     username: "username",
      //     password: "password",
      //   }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  };

  const getarticles = () => {
    fetch("http://127.0.0.1:8000/get_articles", {
      method: "GET",
      
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <div>
      <div>{getuserdata()}</div>
    </div>
  );
};

export default Api;
