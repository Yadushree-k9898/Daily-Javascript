function calculator(a, b, operator){
    switch(operator){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return  b !== 0 ? a / b: "Error: Divide by zero";
        default: return "Invalid operator"
    }
}

console.log(calculator(10, 4, '+'));
console.log(calculator(10, 4, '-'));


function wordCounter(text){
    const words = text.trim().split(/\s+/);
    const chars = text.length;
    const charNoSpace = text.replace(/\s+/g, '').length;

    return {words, chars, charNoSpace}
}

console.log(wordCounter("Hello world! This is a test."));

function rollDice(){
    return Math.floor(Math.random() * 6) + 1

}

function playDiceGame(userGuess){
    const dice = rollDice();
    return userGuess === dice 
    ? `You guessed ${userGuess}, dice was ${dice}. You win!`
    : `You guessed ${userGuess}, dice was ${dice}. Try again!`
}
console.log(playDiceGame(6));
