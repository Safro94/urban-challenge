# Overview

We're looking for you to build a basic booking system for a simplified SPA booking flow using the provided API.

A list of times (we call them slots) are available to choose and each slot specifies a list of people available to choose from to provide you a service (we call these people workers).

Add a combination of slot and worker to a basket ready for checkout.

# Provided API

We've provided you with the following data as endpoints for you to query in your application.
GET https://storage.googleapis.com/urban-technical/slots.json - A list of time based slots (slots.json),
GET https://storage.googleapis.com/urban-technical/workers.json - A list of worker details (workers.json)
GET https://storage.googleapis.com/urban-technical/available-workers.json A list of available workers corresponding to each slot_id (available-workers.json)
We want you to build the user flow as described below as an SPA (Framework/library of your choice - we use React)

# User Flow

Customer is presented with the list of available times (slots)
Customer selects a slot and is shown a list of available workers and their basic information to choose from
Customer selects a worker and an item should be added to their basket (an item consists of a slot_id & worker_id)
Show the customer their basket containing their booking details and allow them to repeat the process
Requirements
The SPA must query the data from the endpoints provided - do NOT download and import the json files into the SPA.
The customer must be able to visit their basket and see what they already added at any time - we don't require you to persist this data to last longer than the session but up to you how you want to do this.
The customer should be able to add and remove items from their basket as they wish.
You can layout your booking flow however you like, but give a thought to usability and accessibility.
Please include instructions on how to build and setup your project - If you wish to host it somewhere that would be a bonus
What we're looking for
We're sure you know what you're doing and this is your chance to show us your skills and your way of working. We want to see how you approach a task, how you tackle our requirements and how solid your code is.

# Our main points of focus when evaluating are:

Clean well structured, reusable and understandable code.
Clean well structured and understandable tests
A clear and usable user flow, how you've thought about things like loading states, error handlers if needed etc.
We're big accessibility advocates!
Layout - We're not marking you on design skills but we expect a level of attention to detail
Things to consider
Leaving comments for us where you wish to expand on what you may have done if you had more time is a great way for us to understand your workflow/thinking.
