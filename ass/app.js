function add(a, b) {
    return a + b;
}

// Step 2: Set up two different variables with two different values
let num1 = 5;
let num2 = 7;

// Step 3: Use your function on the two variables, and output the result using console.log
let result1 = add(num1, num2);
console.log('The result of adding num1 and num2 is:', result1);

// Step 4: Create a second call to the function using two more numbers as arguments
let result2 = add(10, 15);
console.log('The result of adding 10 and 15 is:', result2);

// Step 1: Create an array of descriptive words
const descriptiveWords = ['brave', 'intelligent', 'kind', 'creative', 'diligent', 'thoughtful', 'generous'];

// Step 2: Create a function that contains a prompt asking the user for a name
function describePerson() {
    const name = prompt('Please enter your name:');

    // Step 3: Select a random value from the array using Math.random
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];

    // Step 4: Output into the console the prompt value and the randomly selected array value
    console.log(`Hello, ${name}! You are very ${randomWord}.`);
}

// Step 5: Invoke the function
describePerson();

// Evaluating a Number Game
function evaluateNumberGame() {
    const number = parseInt(prompt('Enter a number:'));
    if (isNaN(number)) {
        console.log('That is not a valid number.');
    } else {
        if (number % 2 === 0) {
            console.log(`The number ${number} is even.`);
        } else {
            console.log(`The number ${number} is odd.`);
        }
    }
}

evaluateNumberGame();
// Friend Checker Game
const friends = ['Alice', 'Bob', 'Charlie', 'Diana'];

function friendCheckerGame() {
    const name = prompt('Enter a name to check if they are your friend:');
    if (friends.includes(name)) {
        console.log(`${name} is your friend!`);
    } else {
        console.log(`${name} is not in your friend list.`);
    }
}

friendCheckerGame();
// Rock Paper Scissors Game
function rockPaperScissorsGame() {
    const choices = ['rock', 'paper', 'scissors'];
    const userChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    
    if (!choices.includes(userChoice)) {
        console.log('Invalid choice. Please enter rock, paper, or scissors.');
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}

// Invoke the function
rockPaperScissorsGame();




