# cis343-project4
Project 4 - Building a pokedex using JavaScript

All required downloads for this project were already in place prior to me starting on it.

Objectives for this project included:
1. Using an API and making calls to it
2. Using Readline, callback, and async functions to call functions and code asynchronously while fetching data

Throughout this program, some of the key learning points for me were understanding callback functions in JavaScript and how to use them, and how API calls work within a program.


### How to run the program
1. Ensure JavaScript and Node are installed.
2. In the command line, run "node main.js"
3. Follow the prompts. Note that terms can be searched with either a name or an ID.

### Function Descriptions

##### Run
Essentially the main function of the program.

Starts the search process by calling the prompt function for the reader with the user's input for which function to call


##### Prompt
Prompts the user on what term they are searching for(pokemon, item, or move)
eg. pikachu, master-ball, 3

Note that prompt can take either the name of the term or it's ID.


##### searchPoke/item/ball
takes the users input from prompt to call the api for a given term. The data from the API is processed as JSON
and given as input to the respected print function

This works by appending ('/move/' + term) to the end of the ApiURL -- '/pokemon/' and '/item/' are used for searchPoke and searchItem.


##### printPoke/item/ball
takes json from the respected search function and converts it into a neat printed output.

The function works by storing parts of the json into local variables to print. 
The variables are assigned by accessing the fields with json.[field]. 


