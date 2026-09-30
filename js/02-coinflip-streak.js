let coinFlip_1;

do {

    coinFlip_1 = Math.round(Math.random());

    if (coinFlip_1 === 0) {

        console.log("Heads");

    } else {

        console.log("Tails");

    }

} while (coinFlip_1 === 0);