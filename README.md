# Event Management : Minor Project
This is an Event Managament Web-Application
The basic feature includes
  - College Clubs
  - Club joining forms
  - Club events
  - Event registrations
  - Event updates

# College Event Management Portal

Welcome to the College Event Management Portal! This web application aims to provide a platform for students and clubs in our college to manage and participate in various events, competitions, seminars, and more.

## Features

### Event Listings
- View all upcoming events, competitions, seminars, and other activities organized by clubs in the college.

### Club Registration
- Clubs can register themselves on the portal.
- Provide details such as club description, photos, contact information, and more.

### Event Creation
- Clubs can create and manage events.
- Include event details such as description, date, time, venue, registration forms, and more.

### User Registration
- Students can register on the portal.
- Create profiles and indicate their interests to receive personalized event recommendations.

### Club Following
- Students can follow clubs they are interested in.
- Receive updates and notifications about club activities.

### Mini Club Creation
- Students can create their own mini clubs within the portal.
- Form groups based on shared interests and organize activities.

### Event Registration
- Students can easily register for events through the portal.
- Streamlined registration process for better participation.

### Drive Creation
- Clubs can create drives for recruitment, volunteer opportunities, and more.
- Reach out to interested students and gather support for club initiatives.

## Technologies Used
- Frontend: 
- Backend: 
- Database:



****************************************************
# Backend:

  > Java Version 17

  > Make Your DataBase of this name  "Event_Management" first Before Starting BackEnd   Server
  >> For Creating database write this query "create database Event_Management;" (withOut doble quoets)

  > After Making DataBase we have to configure in the dataBase for this follow this steps:

  >> First Open your backEnd in this first you have to go in  src folder after than main folder in main folder we have two folder java and resource choose resource folder in the resource folder select application.properties
  
  >> After Selecting the application.properties file set your Mysql password and after this you are ready to start the server

===================================================

****************************************************
# Rest API:

> For Signup college Student 
  - The Request type is post
  - The API Url is : http://localhost:8080/avlokan/college-user
  
  - Parameters:
  -- {
    "email":"xyz@gmail.com",
    "enrollement_id":"12345",
    "first_name":"xyz",
    "last_name":"abc",
    "password":"yxa"
    }

> For SignIn College Student
  - The Request type is post
  - The API Url is: http://localhost:8080/avlokan/login-student

  - Parameters:
  {
    "email":"xyz@gmail.com",
    "password":"xyz"
  }

> For fetching Clubs
  - The request type is Get
  - http://localhost:8080/avlokan/get-clubs

> For fetching events
  - The request type is Get
  - http://localhost:8080/avlokan/all-events

> For Adding Events
  - The request type is Post
  - http://localhost:8080/avlokan/add-events
  - The Parameters:
    {
    "event_name": "Basketball Tournament",
    "associated_dates": "2024-05-12",
    "event_date": "2024-05-12",
    "description": "xyz",
    "event_type": "Tournament",
    "club_host": "Basketball Club", 
    "contact": "aarav2108@example.com,9876543218"
    }

> For Deleting Events:
  - The request type is Delete
  - http://localhost:8080/avlokan/delete/{EventId}

> For admin Taking users From the database
  - The request type is Get
  - http://localhost:8080/avlokan/get-users


====================================================


