# AndroidForum

This is a WEB application using Angular - discussion forum for issues with Android OS Devices.
Uses a Rest-api server with Node.js and MongoDB.

## Project DEMO - https://main--android-forum.netlify.app/home
- using Netlify for the frontend deployment and Render for the backend deployment.
- using mongoDB Atlas to store data

## Every page contains navigation
 - NON logged in user
  ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/b3b6f0c1-0a6b-4c41-9f91-ac01048d4ca0)


image.png
 - logged in user 
 image.png
![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/5df7ba06-9a92-42b7-a2f3-edd41fc2d7a0)

## Every page contains footer
![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/ba643b0b-6470-45d4-819e-6e4e5e37cd9d)




## Home page
Public page for all users.
Home page - showes latest 3 created themes. 
There is a button with link to All Themes page.

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/f8594d06-c315-4cd6-a5a4-022577908ccc)



## Login page

The login form expects as input: email and password.
Valid credentials in this case are:
 -	Email address must have at least 9 symbols. The valid domain name - "bg" or "com".
 -	Password should be at least 5 symbols as well

   ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/a17ec0c8-9fe3-4f4b-8717-94b51283bc2c)


## Register page

The register form expects as input: username, email, password and repeat passwor.
Valid inputs in this case are:
 - 	Username should be at least 5 symbols as well.
 - 	Email address must have at least 9 symbols. The valid domain name - "bg" or "com".
 - 	Password should be at least 5 symbols as well
 -	Repeat password and password must be matched.

   ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/537a2173-af3a-43fd-8a5e-ac1d17d03466)


## USERS
  - georgi@abv.bg        pass: 123123;
  - yavkata@abv.bg       pass: 123456;
  - pamela@gmail.com     pass: 12345;
  - janee@gmail.com      pass: 12345;
  - f.adamova@gmail.com  pass: 123123;


## Add new theme page
Page only for logged in users
Every logged in user can create a new theme in forum.

The new theme form expects as input: theme name, post text.
Valid data in this case is:
 -	Theme name - should be at least 4 characters
 - 	Post text - should be at least 8 characters long
The "Post Theme" button should be disabled if the inputs are NOT valid.

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/824d52a4-1ce8-4ca7-9440-b760d2c13120)




## Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user;
 -  list with own created themes with link to the details of theme;
 -  list with all posted comments with link to the details of theme.

  ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/b5a82980-1315-4e44-8cdc-b5f63f0a0a5a)



## Search page
Public page for all users.
Search theme - case insensitive 

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/bc91cad2-8d9b-4254-83cf-09c74fdc47d0)

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/e9e9fad6-7df4-4ad3-96d0-d4738b545647)

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/0a654fe6-916c-43e8-9740-f88da9436652)



## Theme deatails page
The page therea are two parts - public and private(for logged in users) parts.
1. Public part: 
 - all users can see post text, date of create, poster user and numbers ot likes, but not to like, edit, delete post or to add new comment. 

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/c7b34596-5e61-4f63-bee5-612227a9993c)



2. Private parts:
   - Can post a new comment.
   - Can like every comment. If already liked some post, see the message "Already liked"
   - If the user is owner of post see buttons for edit and delete post.

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/085aba56-5355-42d9-9f10-4be0bf734099)

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/96005a45-722e-4efa-8b64-d3fa7ec8c747)


### Theme deatails - delete post

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/f2224863-2f3f-4928-8468-c57e2a1c5653)


### Theme deatails - edit post

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/15798f91-b80b-42c3-b6aa-fb7cadfeaf7f)



## Used additional lybraries 
 - moment js
 - tailwind 

