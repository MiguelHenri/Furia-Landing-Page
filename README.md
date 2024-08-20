# 🖤 Furia-Landing-Page

Developing a landing page for the FURIA website.

## 📚 Docs

The landing page documentation includes the following:

- System Design Document (SDD): describes the architecture and system design.
- Software Requirements Specification (SRS): outlines the requirements for the development of the system.
- Figma Prototype: mobile-first designed static page prototype.

## 💻 Techs

This site uses Vite, React, PostgreSQL, and Flask.

## Frontend

In the `/frontend` directory, install all dependencies by running:

```bash
$ npm install
```

Then, start the frontend server by running:

```bash
$ npm run dev
```

## Postgres

Make sure you have PostgreSQL installed:
```bash
$ sudo apt install postgresql postgresql-contrib
$ sudo service postgresql start
```

Create and populate the table:
```bash
$ sudo -i -u <username>
$ psql -U <username> -d <database_name> -a -f /<path>/sql/create_table.sql
$ psql -U <username> -d <database_name> -a -f /<path>/sql/populate.sql
```
- Check this [link](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart) for help, if needed.

## Backend

In the `/backend` directory, create a Python environment:

```bash
$ python3 -m venv .venv
```

Activate the environment and install the dependencies:

```bash
$ . .venv/bin/activate
$ pip install -r requirements.txt
```

Then, start the backend server by running:
```bash
$ flask run
```