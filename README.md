# InstaClone

## Overview

**InstaClone** is a RESTful Application using Ruby on Rails as a fully independent backend database and React as an interactive frontend. PostgreSQL syntax is being applied for queries to the database. InstaClone mimics the functionality of Instagram and showcases a different approach to the popular social media app.

## MVP
Minimal Viable Product:

- RESTful Application
- Full CRUD backend
- Full CRUD Front End
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

### Client (Front End)

#### Wireframes

- Mobile Landing/Login & Sign Up

![Wireframe 1](/Assets/InstaCloneWireframe1.png/)

- Mobile Feed Page & Profile Page

![Wireframe 2](/Assets/InstaCloneWireframe2.png)

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Database Modeling   |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Models              |    H     |     1 hrs      |     .5 hrs    |     TBD     |
| Routes              |    H     |     1 hrs      |     .5 hrs    |     TBD     |
| Controllers         |    H     |     1 hrs      |     .5 hrs    |     TBD     |
| Full Crud Backend   |    H     |     2 hrs      |     .5 hrs    |     TBD     |
| Frontend Services   |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Full Crud Frontend  |    H     |     2 hrs      |     2 hrs     |     TBD     |
| CSS and Styling     |    L     |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](/Assets/InstaCloneERD.png)

***

## Post-MVP
Some Post-MVP features I plan to incorporate for this app are:
- File and image upload
- User associated data
- Implementing user roles and limiting CRUD functionality
- Streamlining UX format for better flow

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
