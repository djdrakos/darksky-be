DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS wishlists CASCADE;
DROP TABLE IF EXISTS journals CASCADE;
CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL
);
CREATE TABLE wishlists (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  object_name TEXT NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id)
);
CREATE TABLE journals (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  object_name TEXT NOT NULL,
  entry TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT NOT NULL,
  owner_id INTEGER NOT NULL REFERENCES users(id)
);