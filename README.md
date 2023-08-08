# AndroidForum

This is a WEB application using Angular - discussion forum for issues with Android OS Devices.
Uses a Rest-api server with Node.js and MongoDB.


## Every page contains navigation
 - NON logged in user 
image.png
 - logged in user 
 image.png
![image](https://github.com/fanitaadamova/My-personal-Angular-Project-Softuni/assets/113979211/a81689b0-9fd4-4ff2-8001-a0965ec1ed86)



## Home page
Public page for all users.
Home page - showes latest 3 created themes. 
There is a button with link to All Themes page.


## Login page

The login form expects as input: email and password.
Valid credentials in this case are:
 -	Email address must have at least 9 symbols. The valid domain name - "bg" or "com".
 -	Password should be at least 5 symbols as well

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
The "Post" button should be disabled if the inputs are NOT valid.


## Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user;
 -  list with own created themes with link to the details of theme;
 -  list with all posted comments with link to the details of theme.

## Search page
Public page for all users.
Search theme - case insensitive 

## Theme deatails page
The page therea are two parts - public and private(for logged in users) parts.
1. Public part: 
 - all users can see post text, date of create, poster user and numbers ot likes, but not to like, edit, delete post or to add new comment. 

2. Private parts:
   - Can post a new comment.
   - Can like every comment. If already liked some post, see the message "Already liked"
   - If the user is owner of post see buttons for edit and delete post.


## Used additional lybraries 
 - moment js
 - tailwind 

