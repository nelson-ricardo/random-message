// The script will generate a random message, that is going to pick up the words from a B I G array of words
//Changes, verb, preposition, noun.
/* An array for verbs depending on the index of the verb array, choose the preposition, and then the object
The sentence should follow the You Should: " verb preposition noun"
*/

//add a control to check for arguments which will be only one, and it takes in a number 1 to n.


//checks if an argument was passed into the cli program
if (process.argv[2] === undefined) {
    console.log('Usage: node script.js [integer]');
    return 1;
}

//transforms the number passed into an integer
let number = parseInt(process.argv[2]);

//checks if the number was actually an integer
if (isNaN(number)) {
    console.log('Usage node script.js [integer]');
    return 1; 
}
const verbs = [ ] //add verbs here
const prepositions = [ ] //add prepositions here
const nouns = [ ] //add nouns here