# Simple Node.js Web Server

## Overview
This project is a simple web server built using Node.js.
It demonstrates how to create an HTTP server, serve an HTML file,
handle basic routing, and return a 404 response for invalid routes.

## Features
- Serves an HTML homepage
- Displays a text response on the About page
- Handles invalid routes with a 404 error

## Technologies Used
- Node.js
- Built-in `http` module
- Built-in `fs` module

## Project Structure
── server.js
├── home.html
├── package.json
└── README.md

## Testing
The server was tested by accessing the home page, about page,
and an invalid route to confirm the correct responses.

## How to Run the Project
1. Make sure Node.js is installed.
2. Open the project folder in VS Code.
3. Run the following command in the terminal:
4. Open a browser and visit:

- http://localhost:3000/
- http://localhost/3000/about

## Routes
- `/` – Serves the home HTML page
- `/about` – Displays a simple text message
- Any other route – Returns a 404 error

## Testing
The server was tested by accessing the home page,
about page, and an invalid route to confirm the correct responses.