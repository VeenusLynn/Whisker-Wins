const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const amount = prompt("Please enter a deposit amount : ");

    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid amount. Try again.");
    } else {
      console.log(`Deposit successful. Current balance : ${depositAmount}$`);
      return depositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Please enter the number of lines to bet on : ");

    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Try again.");
    } else {
      console.log(`Betting on ${numberOfLines} line(s)`);
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const amount = prompt("Please enter the bet amount per line: ");

    const betAmount = parseFloat(amount);

    if (isNaN(betAmount) || betAmount <= 0) {
      console.log("inavlid bet. Try again");
    } else if (betAmount * lines > balance) {
      console.log("insufficient balance. Try again.");
    } else {
      console.log(
        `You've successfully bet ${betAmount}$ per line\nTotal bet amount : ${
          betAmount * lines
        }$`
      );
      balance -= betAmount * lines;
      return betAmount;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbol = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbol.length);
      const selectedSymbol = reelSymbol[randomIndex];
      reels[i].push(selectedSymbol);
    }
  }
  console.log(reels);
};

// let balance = deposit();
// const lines = getNumberOfLines();
// const bet = getBet(balance, lines);
spin();
