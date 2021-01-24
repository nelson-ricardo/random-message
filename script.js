
//Changes, verb, preposition, noun.
/* An array for verbs depending on the index of the verb array, choose the preposition, and then the object
The sentence should follow the You Should: " verb preposition noun"
*/


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

//while loop that will create messages as long as we don't reach the number argument
let i = 1;
while (i < number) {
    //function that creates random messages
    console.log(randomMessageCreator());
    i++
}

//The function should select one word from each array.
//The form of the sentence will be You should: "verb preposition noun".

function randomMessageCreator() {
    //generates a random number for the index of the verb and noun thats going to be selected.
    let verbNumber = Math.floor(Math.random() * verbs.length - 1);
    let nounNumber = Math.floor(Math.random() * nouns.length - 1);

    //checks the index of the verb selected and then selects the appropiate preposition

}