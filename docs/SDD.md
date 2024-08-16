# System Design Document (SDD) 

## 1. Introduction

### 1.1 Purpose
This document describes the architecture and design of FURIA's landing page.

### 1.2 Scope
In an ideal scenario, the system will feature a carousel displaying recent news, integration with third-party APIs for game schedules, a newsletter registration form, and web scraping for the latest store items. Since it is too much for a prototype, all features except the newsletter registration will be out of scope for now, the others will use mock data.

## 2. System Architecture

### 2.1 Overview
A high-level description of the system architecture including main components and their interactions.

### 2.2 Components
- Frontend: User interface for displaying news, game schedules, newsletter form, and store items.
- Backend: Server managing functionality, database connection, API integration, and web scraping.
- Database (DB): Stores news articles and user data.
- Third-Party APIs: Provides upcoming game schedules.
- Web Scraping Service: Retrieves the latest store items.
> Web Scraping and Third-Party API's are out of scope for now.

## 3. System Design

### 3.1 Newsletter Registration
- Requirements: Allow users to register for the newsletter through a form.
- Design:
    - Frontend: Form for name and email submission.
    - DB Model: Table with users email and names.
    - API Endpoint: POST /api/newsletter/register – Adds email to the subscriber list.
    - Backend: Store email addresses in a database or email marketing service

### 3.2 News Management
- Requirements: Retrieve and display news articles posted by administrators.
- Design: 
    - Frontend: Shows a news carousel.
    - DB Model: Table with fields such as id, title, content, date_posted.
    - API Endpoint: GET /api/news – Fetches the most recent news.
    - Backend: Use ORM (e.g., SQLAlchemy) for database queries.
> Out of scope for now.

### 3.3 Web Scraping for Store Items
- Requirements: Scrape the store website for the two most recent items.
- Design:
    - Frontend: Shows the two most recent items, including its title and price.
    - Scraper: Use libraries like BeautifulSoup.
    - API Endpoint: GET /api/store/latest-items – Returns the latest two items.
    - Backend: Implement a web scraping service and schedule regular updates.
> Out of scope for now.

### 3.4 Game Schedules from Third-Party APIs
- Requirements: Fetch upcoming game schedules from third-party APIs.
- Design:
    - Frontend: Shows the upcoming matches data.
    - DB Model: Table with fields such as match date, tournament name, participating teams or players.
    - API Endpoints: Document and check the third-party API endpoints used.
    - Backend: Implement integration functions and save upcoming game matches.
> Out of scope for now.