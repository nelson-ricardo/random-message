//creates variable for the number of times the program executes.
let number = 0;

//checks if an argument was passed into the cli program
if (process.argv[2] === undefined) {
    number = 1;
} else {
    //transforms the number passed into an integer
    number = parseInt(process.argv[2]);

    //checks if the number after conversion is actually an integer and not NaN
    if (isNaN(number)) {
        console.log('Usage node script.js [integer]');
        return 1; 
    }
}

//array declaration for verbs, nouns, and the opening statements.
const verbs = ['adapt','agree','apologize','belong','consent','devote','happen','lead','listen','object','react','refer','reply','speak','talk','turn', 'admire', 'apologize','apply','ask','blame','care','excuse','head','long','pay','pray','prepare','scold','search','vote','wait','wish','work','abstain','borrow','escape','graduate','hide','infer','prevent','prohibit','protect','recover','rescue','resign','retire','save','separate','stem','suffer','agree','base','be','blame','comment','concentrate','congratulate','count','depend','elaborate','impose','insist','play','pride','rely','work', 'aim','arrive','glance','guess','hint','laugh','look','marvel','peer','point','smile','stare','wink', 'argue','ask','be','boast','care','concern','decide','dream','forget','know','laugh','protest','think','worry' ]; //add verbs here
const nouns = ['leg','science','stick','cart','brass','respect','dinosaurs','passenger','playground','teeth','knee','squirrel','eye','chess','beginner','stew','dock','coat','skirt','brake','orange','songs','soda','floor','holiday','thunder','battle','rake','look','pollution','pump','station','scarecrow','partner','fork','stomach','drop','steel','observation','blow','smoke','balance','oranges','back','snail','current','increase','purpose','desk','ducks','window','quiver','cream','laborer','day','cat','monkey','corn','spoon','mint','account','art','quartz','representative','meeting','foot','air','border','wire','afternoon','van','cent','finger','mother','mark','price','office','turkey','insect','order','view','harbor','note','car','fly','toothbrush','spy','cable','wave','history','town','toothpaste','bite','arm','bird','quilt','effect','home','shock','person']; //add nouns here
const opener = ['You should', 'The stars are telling me','I get a feeling you should','Your mom told me to to tell you should'];

//while loop that will create messages as long as we don't reach the number argument
let i = 0;
while (i < number) {
    //function that creates random messages
    console.log(randomMessageCreator());
    i++
}

//The function should select one word from each array.
//The form of the sentence will be You should: "verb preposition noun".

function randomMessageCreator() {
    //generates a random number for the index of the verb and noun thats going to be selected.
    let verbNumber = Math.floor(Math.random() * verbs.length);
    let nounNumber = Math.floor(Math.random() * nouns.length);
    let openerNumber = Math.floor(Math.random() * opener.length);
    let prepositionUsed = '';
    //checks the index of the verb selected and then selects the appropiate preposition
    // 
    if(verbNumber <= 16) {
        prepositionUsed = 'to';
    } else if(verbNumber <= 35) {
        prepositionUsed = 'for';
    } else if(verbNumber <= 53) {
        prepositionUsed = 'from';
    } else if(verbNumber <= 70) {
        prepositionUsed = 'on';
    } else if(verbNumber <= 84) {
        prepositionUsed = 'at';
    } else if (verbNumber <= 102) {
        prepositionUsed = 'about';
    }
    let sentence = `${opener[openerNumber]}: ${verbs[verbNumber]} ${prepositionUsed} ${nouns[nounNumber]}`;
    return sentence;
}