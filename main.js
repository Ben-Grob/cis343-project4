/*
Main JS file for CIS 343 Pokedex project

author: Ben Grob
date: Nov 22 2025
project: Project 4: Pokedex API

Planning on using callback functions and readline
*/

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

/*
will call showMenu(), then use readline to ask the user to enter their choice.
will call the prompt function and pass to it the name of the function we wish to use for searching

Should this be a self Invoking function??
*/
function run() {
    // call showMenu()
    showMenu();

    // use readline to ask the user to enter their choice
    // let choice = readline...

    // call the prompt function with the name of function given from user
    // prompt(choice);

    return 0;
}

/*
will display all the menu options.
*/
function showMenu() {

}

/*
will use readline to ask the user for a search term.
It will then call the function passed into it (whichis what cb is - a callback function)
and pass the data the user entered as a parameter.
param: function to call (cb) eg. searchPoke
input: value to pass to function (cb) eg. Pikachu
*/
function prompt(cb) {
    // use readline to ask for a search term
    // readline ...

    // call the callback function with the search term given from the user
    // cb(input)

}


/*
will query the API for a particular Pokemon (passed in as term). 
If it receives a valid response, it will call printPoke(json) with the json to
print out the name, weight, height, base experience, and
all the moves for that Pokemon. It will then call run()
again to reprompt.
*/
function searchPoke(term){
    // TODO: call the api with term

    // call printPpke(json)
    printPoke(json);

    // call run
    run();
}



/*
print the data for the Pokemon in a neat
and clean way.
*/
function printPoke(json){
    console.log("printPoke\n");

}


/*
works exactly like the searchPoke() function,  except searches the Item endpoint for an item.
Calls the corresponding printItem(json) method. Calls run() to reprompt.
*/
function searchItem(term){
    console.log("searchItem\n");
    // TODO: call the api with term with iteam endpoint

    // call printItem(json)
    printItem(json);

    // call run
    run();
}



/*
print the data for the Item in a neat
and clean way. Pick at least four points to print.
*/
function printItem(json){
    console.log("printItem\n");

}


/*
works exactly like the searchPoke()
function, except searches the Move endpoint for a move.
Calls the corresponding printMove(json) method.
*/
function searchMove(term){
    console.log("searchMove\n");
    // TODO: call the api with term with endpoint for a move

    //call printMove(json)
    printMove(json);
}


/*prints the move data in a neatly
formatted way. Calls run() to reprompt
*/
function printMove(json){
    console.log("printMove\n");

    // call run
    run();
}
