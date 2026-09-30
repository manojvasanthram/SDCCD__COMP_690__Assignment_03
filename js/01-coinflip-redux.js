let coinFlip;

let numberOfFlips = parseInt(
    window.prompt("How many times would you like to flip the coin?")
);

for (let i = 0; i < numberOfFlips; i++) {

    coinFlip = Math.round(Math.random());

    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}