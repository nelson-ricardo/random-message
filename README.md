# Random Message Generator

This is a portfolio project that CodeCademy proposes after the Sections of Javascript I and II and Git and Github.
The goal of the project is to generate random messages with an array of verbs, nouns, and some ways to begin the sentence.

The format of the sentences is: "(Opening): (verb) (preposition) (noun)".

## Usage
This is a node command line program, it needs one argument with it, an integer, between 1 and N where N is a big number.
The way to call the program is the next one:
```bash 
    node path/to/script.js number (1-n)
```

The program only accepts numbers and not strings that make a number (for example ten), if that happens the program stops.

If no argument was provided then it is set to just one time.

## Problems
It uses a huge array (100 elements) and it is hard-coded into the program, so it is random but constraint for the amounts
of elements that is inside of the array(s).