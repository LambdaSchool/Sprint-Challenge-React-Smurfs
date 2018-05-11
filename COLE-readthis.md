* Notes
** Note: I wasn't sure where to put my comments about steps/tasks/instructions in the code because everything is spread out over different files. If I put notes in one file you might not know whether I went there first or second or whatever. So here it is.
** Another Note: After reading the README 3 or 4 times I had no idea what I started to get a little upset because I wasn't sure what half of it meant, so I used the checklist that Ellen Nitchals sent out to guide me. Sorry. I know I'm supposed to follow the README but half the time they just confuse me more than I already was and I just go by the checklists as they make a lot more sense and are much easier to follow.
* Project Organization
** Step 1: npm setup
*** I understood this part of the README and it's just like a lot of other projects we've done recently so everything went according to plan except for the last part, which says that I should get an error message. I did not. When I ran npm start in my village, I saw input boxes for name, age, and height, an "Add to the village" button, and "Smurf Village" written beneath. There was no error, it was just empty.
** Step 2: tell axios to get the smurfs that are already on the server
*** I did this in my App.js document. The instructions already commented in there were kind of confusing to me. I'm not sure what they meant by passing the right properties on state down to props so I ignored this stuff and eventually deleted it because it was confusing me.
*** I added an axios request in a componentDidMount thing because in class Dan said that you should always put it in componentDidMount. I am not 100% clear on why but anything in componentDidMount runs as soon as the component is mounted and I guess if it somehow ran before then there would be nothing to set state to, and if it ran afterwards the user would get impatient or something. I don't know. I just know it's a good practice to put it in here.
*** I pointed the Axios request to the site containing our data (which is only one smurf), said then give me data, and made sure it was set to state. When I put the smurfs part in, everything worked. I now have one Brainy Smurf in my list. So one down, two to go. Yay!
**Step 3: implement a post request to create a new smurf and save it to the database
*** After looking at all the files, this looks like it should go in SmurfForm.js since there is a comment in there saying I should add code to create the smurf under addSmurf. But first, I will do a git because that's just how I roll. Otherwise, I will break something and have to go all the way back to the beginning and then forget how I did everything in the first place.
*** What is this event.preventDefault() thing that is already written in this file? I've seen it before but I have no idea what it does so I'm just going to leave it alone.
*** Made a variable to hold my new smurfs because it seemed like the right thing to do. Otherwise, where is this app going to hold what the user inputs until it can be displayed?
*** I just realized that this looks EXACTLY like what I agonized over all day yesterday, so I kind of used the same code here. Sorry.
*** Of course it doesn't work for the same reason it didn't work yesterday - I need to make a new function/method/whatever and call for the props or whatever. Since we are importing SmurfForm into App.js I'm going to try that there.
*** Oh. I need to separate out my axios GET thing into another method.
*** OMG I FORGOT THE ONCLICK. What is wrong with me???
*** But it works now. The user can add new data into the input boxes and it appears below Brainy Smurf after you click "add to the village". So 2 down, 1 to go.
** Step 4: 