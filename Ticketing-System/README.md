# Ticketing System Simulation (Queue Data Structure)
Written by Edgar

## Overview
This project simulates a real-world service center ticketing system using a **Queue (FIFO)** data structure. Customers take a ticket number and are served in the order they arrive.

This project demonstrates:
- Queue data structure
- Object-oriented programming
- Unit testing
- Algorithm analysis
- Clear communication of a technical solution

## Problem Description
Many service centers (banks, hospitals, support desks) use ticketing systems to manage customers. Customers take a number and wait until their ticket is called.

This program simulates that process by:
1. Generating tickets
2. Adding them to a queue
3. Processing them in order
4. Simulating arrival and service times

## System Flow
Customer Arrives
|
Create Ticket
|
Add Ticket to Queue
|
Repeat Until All Customers Arrive
|
Start Processing Tickets
|
Serve First Ticket in Queue
|
Remove Ticket from Queue
|
Repeat Until Queue is Empty

## Ticket Class
Each ticket stores:
- Ticket Number
- Timestamp of creation

Example output:


Ticket #3 | Time: 14:22:10

## Why Use a Queue?
A queue follows **FIFO (First In, First Out)** which ensures customers are served fairly and in the order they arrived.

Queue operations are efficient:
- Enqueue → O(1)
- Dequeue → O(1)

## Clarifying Questions
Before implementing the solution, these questions could be asked:

- Should the queue support multiple service agents?
- Is there a limit to how many tickets can be created?
- Should ticket numbers reset daily?
- Should priority tickets exist?
- Should tickets expire after some time?

## Time and Space Complexity

### Time Complexity
Ticket Generation: O(1) per ticket
Ticket Processing: O(1) per ticket

If N tickets are generated and processed:

Overall Time Complexity: **O(N)**

### Space Complexity
Queue stores N tickets → **O(N)**

## Project Structure
