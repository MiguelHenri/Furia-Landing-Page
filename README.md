# 🖤 Furia-Landing-Page

Developing a landing page for FURIA's website. The page was previously deployed on [Render](https://render.com/).

## 📚 Docs

The landing page documentation includes the following:

- System Design Document (SDD): describes the architecture and system design.
- Software Requirements Specification (SRS): outlines the requirements for the development of the system.
- Figma Prototype: mobile-first designed static page prototype.
- Demo Video: a link to the demonstrative video.

## 💻 Techs

This site uses Vite, React, PostgreSQL, and Flask.

## 🎮 How to Run

Make sure you have all `.env` files configured correctly. Take a look at `.env.example`.

In the `backend` directory, build the website by running the following:
```bash
$ (pip install -r requirements.txt) && (cd ../frontend && npm install && npm run build)
```
> You may use a python environment.

Now, again in the `backend` directory, run the website:
```bash
$ gunicorn -w 4 app:app
```