# Dog Facts API
Written by: Edgar

This project is a simplified Dog Facts API built using Node.js and Express.js.

## Features
- Retrieve dog facts
- Query specific number of facts
- Error handling for invalid requests

## Installation

Install dependencies:

npm install

## Run the server

node server.js

Server runs on:
http://localhost:3000

## API Endpoint

GET /facts

Example:
/facts?number=2

## Example Response

{
 "success": true,
 "facts": ["A group of pugs is called a grumble."]
}