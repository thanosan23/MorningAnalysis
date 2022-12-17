drop table if exists user;
create table user (
  user_id integer primary key autoincrement,
  username text not null,
  password_hash text not null
);