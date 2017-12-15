# Assessing your Redux/Axios Fu
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about Redux.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
    * Redux's single source of truth is one giant state tree. The state tree is not directly modified allowing for easier debugging, easy retrieval of data, and undo/redo functionality.
2. Describe what an _Action_ is/does.
   * An action sends data to a reducer based on what type of action has been dispatched.
3. Describe what a _Reducer_ is/does.
   * A reducer takes a dispatched action and the current state and returns a new version of the state.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    * HTTP - Hypertext Transfer Protocol
    * CRUD - Create Read Update Delete
        * Get - Retrieve data
        * Post - Send data, create something with the data
        * Put - Send data, create/update something with the data
        * Delete - Send data, remove something relating to the data

## Initializing Project - READ THIS CAREFULLY, you have two apps here. A server, and a client.
* Start by Forking and Cloning this Repo.
* `cd` into the forked copy.
* _RUN_ `npm install` to retrieve all the dependancies.
* _LOOK_ at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
* _RUN_ `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your Redux Actions. 
* After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is your DB that your **API** will be using to store our Smurf Data.
* _LOOK_ at your `village` directory and notice it's just a plain ol' React App that we've built and included redux.
* _cd_ into `village` and run `npm install` to retreive the client side dependancies.
* _RUN_ `npm start` to fire up your React Server. 
* _Notice_ your app is built out, but you don't have any actions or reducers!! You're goal is to solve that problem! 
* You can begin working on your Redux application now. Start with either the actions or reduces. Have fun! 

## Project Description 
* Hello students! Welcome to your Redux/Axios Sprint Challenge. For this challenge you're going to be implementing a few HTTP Requests from within a Redux Application.
* The requirements for completion are that you are using AXIOS to `GET` a list of Smurfs that exist on the server && a `POST` to create a new Smurf and save it to the Smurf DB. 
* If you get both of those two requirements finished early. Proceed to the **STRETCH PROBLEM** to try and implement a `PUT` and a `DELETE`.

## API Design - This is how you'll interface with the API and what is required from every endpoint.

### GET '/smurfs'
  * To retreive an array all the smurfs in the Smurf DB simply write a get to the endpoint `'/smurfs'`

### POST '/smurfs'
* To add a smurf to the Smurf DB you'll need all three fields.
* Example:
```
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```
* If a smurf is created correctly, you should see a response that is an array of smurfs with uniqe id's assigned to each smurf.
* **HINT** if you are going to be working on Extra Credit, you'll need to use that unique `id`.
* Example of object created in Smurf DB: 
```
[
    {
        "name": "Brainey",
        "age": 200,
        "height": "5cm",
        "id": 0
    },
    {
        "name": "Sleepy",
        "age": 200,
        "height": "5cm",
        "id": 1
    }
]
```




## STRETCH PROBLEM - Extra Credit!
* The following two endpoints are here for you if you'd like to push yourselves a little further. 
### PUT '/smurfs'
* For this endpoint to work, you'll need an `id` and at least one field to update on the Smurf object. `name` `age` `height`.
* Example:

```
input:
{
  id: 1,
  name: Sleepy
}
output:
{
  name: 'Sleepy',
  age: 30,
  height: '3cm,
  id: 1
}
```

### DELETE '/smurfs'
* For this endpoint to work, all you need is an id sent up with your request body.
* Example: 
```
{
  id: 1
}
```
* If your delete worked, you'll get a success object back.
* Example: 
```
input: 
{
  id: 1
}
output:
{
    "SmurfRemoved": {
        "name": "Sleepy",
        "age": 200,
        "height": "5cm",
        "id": 1
    }
}
```
#### 

