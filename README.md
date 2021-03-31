# InstaClone

## Overview

**InstaClone** is a RESTful Application using Ruby on Rails as a fully independent backend database and React as an interactive frontend. PostgreSQL syntax is being applied for queries to the database. InstaClone mimics the functionality of Instagram and showcases a different approach to the popular social media app.

## MVP
Minimal Viable Product:

- RESTful Application
- Full CRUD Ruby on Rails backend with 3 tables and appropriate associations
- Full CRUD Front End using CRA
- User Authorization/Authentication
- User profile

### Goals
The goals of this application include, but are not limited to: 
- Handle full user authorization/authentication
- Associate data with users and limit CRUD functionality
- Incorporate Ruby on Rails back-end to provide custom routes for API calls
- Clean and efficient front-end functionality
- User-friendly experience dedicated to efficiency

<br>

### Libraries and Dependencies

| Library | Description |
| --- | ----------- |
| React | Front End Framework |
| React Router Dom | allow inter page linking and routing for front end |
| Axios | allow frontend to communicate with backend|
| Materials UI | styled componenets to integrate into front end |
| Ruby on Rails | back end server framework |
| bcrypt/JWT | authorization setup |

### Client (Front End)

#### Wireframes

- Mobile Landing/Login & Sign Up

![Wireframe 1](/Assets/InstaCloneWireframe1.png/)

- Mobile Feed Page & Profile Page

![Wireframe 2](/Assets/InstaCloneWireframe2.png)

- Mobile Add Comment & Edit Profile Page

![Wireframe 3](/Assets/InstaCloneWireframe3.png)

- Mobile Add Post and Edit Post Page

![Wireframe 3](/Assets/InstaCloneWireframe3.png)

- Desktop Feed Page

![Wireframe 3](/Assets/InstaCloneWireframe3.png)

#### Component Tree

![Component Tree Sample](/Assets/InstaCloneComponentTree.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Containers
            |__ HomeContainer.jsx
            |__ LandingPageContainer.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
|__ services/
      |__ apiCalls.jsx

```

#### Time Estimates

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Database Modeling   |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Models              |    H     |     1 hrs      |     .5 hrs    |     TBD     |
| Setting Up Basic Layout | H | 2 Hr |  Hr |
| Testing API Routes | H | 3 Hr |  Hr |
| Deploy API | H | 3 Hr |  Hr | 
| Create React Front End | H | 3 Hr |  Hr | 
| React Route/Links | H | 3 Hr |  Hr | 
| React Post/Feed Component | H | 3 Hr |  Hr | 
| React/JS post/put/delete calls | H | 3 Hr |  Hr | 
| React Header/Footer | M | 3 Hr |  Hr | 
| CSS Styling DESKTOP | H | 3 Hr |  Hr | 
| CSS Styling MOBILE | H | 3 Hr |  Hr | 
| POST MVP - Likes | L | 3 Hr | Hr | 
| UI/UX breakpoints | M | 3 Hr |  Hr | 
| Testing React Components | H | 3 Hr |  Hr | 
| Testing CSS breakpoints | M | 3 Hr |  Hr | 
| Hosting Final Product | M | 3 Hr |  Hr | 
| Total Time | | 38 Hrs | Hrs | 

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](/Assets/InstaCloneERD.png)

***

## Post-MVP
Some Post-MVP features I plan to incorporate for this app are:
- User Following 
- File and image upload
- User associated data
- Implementing user roles and limiting CRUD functionality
- Streamlining UX format for better flow

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
