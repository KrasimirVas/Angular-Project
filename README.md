# Rate Players
"Angular Fundamentals - March 2019" Project Defense

*github: https://github.com/KrasimirVas/Angular-Project*

## Project Specification

**“Rate Players”** is a web application for football fans to rate and comment football players.
The client side of the app is built with **Angular 7**.
For backend and database are used **Kinvey**. 
Rate Players have users and admin. Each user can register, login and logout. 
*Every authenticated user* can view all players in the **All Players**, rate them from 1 to 5, and add comment about them. Also they can add new players, edit and delete it ( when they are the creators of player).  

*Admins* can edit and delete all users players, edit and delete users profiles.**

## Functionality

#### • User authentication
    ◦ Sign in existing user with username and password
    ◦ Sign up new user with username, email,password and confirm password.
    ◦ Sign out from the application
    
#### • User profile
    ◦ User data: they can see and edit their own information
    ◦ They can see last added players by them. Can edit and delete them   ◦ 
    ◦ They can see last added comments by them. Can edit and delete them   ◦   
#### • Admin profile
	◦ Admins can ban users, edit user's email address
	◦ They can delete and edit player's information. Also can delete comments.        
        
## Starting the project
##### • Download the project
```
◦ git clone "https://github.com/KrasimirVas/Angular-Project.git"
```

##### • Setting up dependencies
    ◦ Open "Angular-Project" folder
    ◦ npm install
    
##### • Setting up Kinvey    
    ◦ Add new project in https://console.kinvey.com/apps/
	◦ Copy "App Key" and "App Secret" from Kinvey, and paste them in src/app/components/constants/api.constants.ts    

    
##### • Run it
	◦ Open "Angular-Project" folder
    ◦ ng serve 
    ◦ Starts on localhost:4200

