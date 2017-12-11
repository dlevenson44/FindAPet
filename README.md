# FindAPet
MVP will include full auth with ability to update/delete account information, with related table hosting pet information.

Reach goals will include implementing the google map api for pet/:id pages, rendering timed slideshow for index page, create second link to make batch entering easier for shelters (maybe file upload?)


User Stories:
0.  Auth partial will render login/register if no user is logged in, will render logout/my profile if user is logged in.  Will render on all pages.
0A.  View Profile view will render two links, one to allow a user to edit profile information, the other will allow the user to update/delete any posts they made.
1. Index page loads View Pets and Add Pet links.
2. User clicks add.  If logged in, form loads for user to enter information about pet they are putting for adoption/foster.
2a. User will be prompted to login/register
3. User clicks View PEts, renders list of ALL pets.  Screen will render links to filter for pets for adoption and pets for foster
4.  User clicks on pet for more information.


Technologies Used:
Front-end will be built using React, back-end will be built using Rails.

Timeline:

Monday, 12/11-- get proposal approved and create test server starting with auth

Tuesday, 12/12-- get test server working, begin building prod server starting with auth

Wednesday, 12/13-- finish building prod server, begin building React

Thursday, 12/14-- continue building React

Friday, 12/15-- finish building React

Saturday, 12/16-- Styling

Sunday, 12/17-- Styling (MVP done) Begin Reach Goals

Monday, 12/18-- Reach Goals

Tuesday, 12/19-- Finish Reach goals, deploy

TABLE STRUCTURE:  A USER CAN HAVE MANY PETS

User Table:

-Username

-Password

-First Name

-Last Name

-Address

-City

-State_abbrv

-Zip

-Phone

-Email

Pets Table:

-User_ID

-Name

-Post Type

-Animal Type

-Breed

-Age

-Picture

-Description

-Foster Length (optional)


Foreseen Challenges/Obstacles
1.  I've never done Auth with React and have not done it on Rails on my own work, so this would seem like an obvious place for an unexpected roadblock to appear.
2. Update/delete with auth seems easier said than done, expecting possible issues with these functions.  Important to make sure that if a user delete's their profile, it deletes their posts as well.
3.  Ability to upload image files to database
4.  Ability to upload batch data file for larger submissions (shelters)

GitHub Link:  https://github.com/dlevenson44/FindAPet