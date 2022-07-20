const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("error, please type either rock, paper, or scissors");
    }
    // if use return instead of console.log then undefined would not appear
  };
  // console.log(getUserChoice('jack'));
  
  // now computer has to make choice
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  // determine winner
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "This game is a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Sorry, Computer Won!";
      } else {
        return "Congratualations, you won!";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Sorry, Computer won!";
      } else {
        return "congrats, you won.";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "Sorry, computer won!";
      } else {
        return "Congrats, you won!";
      }
    }
  };
  
  console.log(determineWinner("rock", "scissors"));
  console.log(determineWinner("paper", "scissors"));
  console.log(determineWinner("rock", "rock"));
  