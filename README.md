# Assessing your Redux/Axios Fu
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about Redux.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions
1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
2. Describe what an _Action_ is/does.
3. Describe what a _Reducer_ is/does.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

## Project
* 

## API Design
### GET '/smurfs'
  * to read all the smurfs in the smurf db simply write a get to the endpoint `'/smurfs'`
### POST '/smurfs'
* to add a smurf into the smurf DB you'll need all three fields
* example
```
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```
* if a smurf is created correctly, you should see a response that is an array of smurfs with uniqe id's assigned to each smurf.
* example of object created in Smurf DB: 
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

### Delete '/smurfs'
* for this endpoint to work, all you need is an id sent up with your request body.
* example: 
```
{
  id: 1
}
```
* if your delete worked, You'll get a success object back that looks like this 
* example: 
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

