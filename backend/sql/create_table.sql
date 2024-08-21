-- Dropping if exists
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS teams;
DROP TYPE IF EXISTS match_icon;

CREATE TYPE match_icon AS ENUM (
    'VALORANT',
    'LOL',
    'CS',
    'R6'
);

CREATE TABLE admins (
    username VARCHAR(50) PRIMARY KEY,
    password_hash VARCHAR(256) NOT NULL
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    tournament VARCHAR(100) NOT NULL,
    player1 VARCHAR(50) NOT NULL,
    player2 VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    icon match_icon
);

CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    text VARCHAR(300) NOT NULL,
    link VARCHAR(300) NOT NULL,
    image_path VARCHAR(100) NOT NULL,
    alt VARCHAR(300)
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    price VARCHAR(10) NOT NULL,
    link VARCHAR(300) NOT NULL,
    image_path VARCHAR(100) NOT NULL,
    alt VARCHAR(300)
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    link VARCHAR(300) NOT NULL,
    image_path VARCHAR(100) NOT NULL,
    alt VARCHAR(300)
);