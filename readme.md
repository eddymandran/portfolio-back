# Checkpoint n°3 - JS - **4h**

For this exercise you have 4 hours ahead of you. This checkpoint is not an exam, it will allow us to validate your skills, so try to do it as much as possible on your side.
This checkpoint is very consistent, if you can't do everything it doesn't matter, do your best :wink:

**!!! FIRST STEP REQUIRED BEFORE STARTING THE FIRST EXERCISE!!!!!**

---

- Clone this project
- Create a "lastname_firstname" branch, which will contain your progress (lastname_firstname will be replaced by your first and last name...)

## Prerequisites (tools installed)

- NodeJS
- NPM
- MySQL
- Postman, Insomnia, Curl, Rest Client, something to test your routes.

## An album application with Express

![Give Life Back to Music](https://laughingsquid.com/wp-content/uploads/2013/05/givelifebacktomusic5.gif)

Being a music lover, you want to create an application that allows you to manage albums.

The goal here is to create the backend with Node/Express.

Here are the user stories that tell you which routes you will have to implement on your backend, and which SQL queries will have to be executed:

- as a user, I want to be able to create a new album.
- as a user, I want to be able to see an album by entering its id in the url.
- as a user, I want to create and assign a song to an album.
- as a user, I want to list all the songs from an album.
- as a user, I want to be able to delete an album.
- as a user, I want to be able to modify an album.
- as a user, I want to delete a song.
- as a user, I want to edit a song from an album.

You will have to respect the following rules on your routes:

- The body of the **HTTP requests** must be in the **JSON format**
- The body of the **HTTP responses** must be in the **JSON format**
- HTTP requests for **reading** must **return the element(s)** back into the HTTP response
- HTTP requests for **creation and modification** must **return the created/modified element** in the HTTP response
- HTTP requests for **deletion** must not **return any element** in the HTTP response

**Complies with REST principles, especially with regard to naming different routes and HTTP return codes.**

- [http-status-codes](https://restfulapi.net/http-status-codes/)
- [REST best practices](https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/)

Be sure to group the routes using the Express router and test the API with Postman.

You can find, down below, the database schemas (:uk: CDM & LDM, :fr: MCD & MLD).

![MCD](https://i.imgur.com/Z3DKVCT.png)
![MLD](https://i.imgur.com/PDsSoEC.png)

### Bonus

Create a route that allows you to search the database for albums and songs according to the following criteria:

- the title of an album
- the kind (genre) of an album
- the artist of a track

The **parameters** must be entered in the **url**, all parameters are **optional** and they can be placed in **any order**.

### Super Bonus

After all this work, there are still many things to do! We would like to be able to manage:

- the users
- the favorite albums for each user

It will therefore be necessary to do the following things:

#### SQL

- create a `user` table containing at least the fields:
  - `id`
  - `firstName`
  - `lastName`
  - `email`
  - `password`
- users and albums have a Many-to-many relationship, so you will need to create an association table `user_album`, which will allow users to put albums in their favorites

Here are the user stories of the super-bonus features:

- as a user, I want to create my profile
- as a user, I want to add an album to my favorites
- as a user, I want to list my favorites albums (only mines)
- as a user, I want to remove an album from my favorites
