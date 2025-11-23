/*
Main JS file for CIS 343 Pokedex project

author: Ben Grob
date: Nov 22 2025
project: Project 4: Pokedex API

Planning on using callback functions and readline
*/

const apiUrl = `https://pokeapi.co/api/v2/`;

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

/*
will display all the menu options.
*/
function showMenu() {
    console.log("Displaying Menu Options:")
    console.log("1 - Search for a pokemon")
    console.log("2 - Search for an Item")
    console.log("3 - Search for a move")
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
    rl.question("What term do you want to search for? ", (response) => {
        console.log('response:', response);
        cb(response);  // call the cb function the given term
    });
}


/*
will query the API for a particular Pokemon (passed in as term). 
If it receives a valid response, it will call printPoke(json) with the json to
print out the name, weight, height, base experience, and
all the moves for that Pokemon. It will then call run()
again to reprompt.
*/
async function searchPoke(term){
    console.log("searching for", term);
    
    try{
        const response = await fetch(apiUrl + '/pokemon/' + term);
        const data = await response.json(); // converts the raw response into a useable JS obj

        printPoke(data);

    }
    catch{
        console.error("error fetching any poke data", error);
    }

    // call printPpke(json)
    // printPoke(json);

    // call run
    run();
}



/*
print the data for the Pokemon in a neat
and clean way. print out the name, weight, height, base experience, and
all the moves for that Pokemon.
*/
function printPoke(json){
    let name = json.name;
    let weight = json.weight;
    let height = json.height;
    let base_exp = json.base_experience;
    
    let moves = json.moves;
    for(let i=0;i<moves.length;i++){
        moves[i] = moves[i].move.name;
    }
    
    console.log("Name:", name);
    console.log("Weight:", weight);
    console.log("Height:", height);
    console.log("Base experience:", base_exp);
    console.log("Move Set:", moves);
    
}


/*
works exactly like the searchPoke() function,  except searches the Item endpoint for an item.
Calls the corresponding printItem(json) method. Calls run() to reprompt.
*/
async function searchItem(term){
    console.log("searching for", term);
    try{
        const response = await fetch(apiUrl + '/item/' + term);
        const data = await response.json(); // converts the raw response into a useable JS obj

        printItem(data);

    }
    catch{
        console.error("error fetching any item data", error);
    }

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
async function searchMove(term){
    console.log("searching for", term);
    try{
        const response = await fetch(apiUrl + '/move/' + term);
        const data = await response.json(); // converts the raw response into a useable JS obj

        printMove(data);

    }
    catch{
        console.error("error fetching any move data", error);
    }
}


/*prints the move data in a neatly
formatted way. Calls run() to reprompt
*/
function printMove(json){
    console.log("printMove\n");

    // call run
    run();
}


/*
will call showMenu(), then use readline to ask the user to enter their choice.
will call the prompt function and pass to it the name of the function we wish to use for searching

Should this be a self Invoking function??
*/
function run() {
    // call showMenu()
    showMenu();

    // use readline to ask the user to enter their choice
    cb = "1";
    rl.question("What function do you want to run? ", (response) => {
        switch(response) {
            case "1": cb = searchPoke;break;
            case "2": cb = searchItem;break;
            case "3": cb = searchMove;break;
            default: console.log("input didn't match cases");

        }
        prompt(cb);  // call the prompt function wiht their choice
    });
}


run();