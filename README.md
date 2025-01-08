# email-dashboard-app

This project is a simple email dashboard application that consists of a React.js frontend and a Python Flask backend. It provides APIs to fetch email statistics, email activity timeline, and invoke workflows.

# Features

Display email statistics (total emails, unread, read, replied, drafts).

Show email activity timeline by hour.

Invoke workflows using email data.

Prerequisites

# Frontend:

Node.js (v16 or later)

npm or yarn

# Backend:

Python 3.7+

Flask

Flask-CORS

# Installation

1. Clone the Repository
   ` git clone https://github.com/yourusername/email-dashboard-app.git `
   
   ` cd email-dashboard-app `
   
3. Setting up the Frontend
   
Navigate to the frontend directory:
 `cd web `
 
Install dependencies:
`npm install `

Run the development server:
`npm start`

The frontend will be available at http://localhost:3000.

3. Setting up the Backend
   
Navigate to the backend directory:
`cd api`

Create a virtual environment and activate it:
`python -m venv venv`

 `venv\Scripts\activate`

Install dependencies:
`pip install flask flask-cors`

Run the backend server:
`python app.py`

The backend will be available at http://localhost:8000.

# API Endpoints

1. Email Statistics API

Endpoint: GET /email-stats

URL: http://localhost:8000/email-stats

2. Email Activity Timeline API

Endpoint: GET /email-activity

URL: http://localhost:8000/email-activity

3. Workflow Invocation API

Endpoint: POST /invoke

URL: http://localhost:8000/invoke

# Usage

Start the backend server by running python app.py in the backend directory.

Start the frontend server by running npm start in the frontend directory.

Open your browser and navigate to http://localhost:3000 to interact with the application.
