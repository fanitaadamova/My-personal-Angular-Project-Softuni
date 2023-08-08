# AndroidForum

This is a WEB application using Angular - discussion forum for issues with Android OS Devices.
Uses a Rest-api server with Node.js and MongoDB.


## Every page contains navigation
 - NON logged in user
  ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/b3b6f0c1-0a6b-4c41-9f91-ac01048d4ca0)


image.png
 - logged in user 
 image.png
![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/5df7ba06-9a92-42b7-a2f3-edd41fc2d7a0)

## Every page contains footer
![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/9243b62d-b957-48af-b449-0ea73ab508da)



## Home page
Public page for all users.
Home page - showes latest 3 created themes. 
There is a button with link to All Themes page.

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/1a670eac-befa-4b1c-bb28-4dcb47e63d69)



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

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/b4eeb8f0-481e-4be8-89e9-44a627b47a66)



## Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user;
 -  list with own created themes with link to the details of theme;
 -  list with all posted comments with link to the details of theme.

   ![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/4f717344-d5a8-41a9-945d-48958dc0b972)


## Search page
Public page for all users.
Search theme - case insensitive 

## Theme deatails page
The page therea are two parts - public and private(for logged in users) parts.
1. Public part: 
 - all users can see post text, date of create, poster user and numbers ot likes, but not to like, edit, delete post or to add new comment. 

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/edd0f7d0-c3a8-408f-aac5-f448596579c6)


2. Private parts:
   - Can post a new comment.
   - Can like every comment. If already liked some post, see the message "Already liked"
   - If the user is owner of post see buttons for edit and delete post.

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/085aba56-5355-42d9-9f10-4be0bf734099)

![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/b9e66354-da2d-4a67-a3b8-d10d1ad0e695)



## Used additional lybraries 
 - moment js
 - tailwind 

