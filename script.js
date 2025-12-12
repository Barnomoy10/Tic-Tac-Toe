const game = ( () => {

  // Create an empty array for the console gameboard
  const gameboardArr = ["", "", "", "", "", "", "", "", ""];
  
  // Create a player1 object with their name and marker
  const createPlayer1 = (name) => {
    const marker = "X";
    const array = ["", "", "", "", "", "", "", "", ""];
    return { name, marker, array };
  }

  // Create a player2 oject with their name and marker
  const createPlayer2 = (name) => {
    const marker = "O";
    const array = ["", "", "", "", "", "", "", "", ""];
    return { name, marker, array };
  }

  // Create a gameflow object to control the flow of the game
  const gameflow = () => {

    // Prompt the players for their name
    let player1Name = window.prompt("Enter the name of Player 1:");
    let player2Name = window.prompt("Enter the name of Player 2:");

    // Call the players using their names
    const player1 = createPlayer1(player1Name);
    const player2 = createPlayer2(player2Name);

    // Create a array variable to run a loop till the end of the array
    const gameboardLength = gameboardArr.length;
    let arrayVar;
    if (gameboardLength % 2 === 1) {
      arrayVar = (gameboardLength + 1)/2;
    }
    else {
      arrayVar = gameboardLength/2;
    }

    // Create a move counter variable to track the number of moves by the players
    let playerMoveCounter = 0;

    // Run a for loop till the end of the half of the array
    for (let i = 0; i < arrayVar; i++) {
      // Prompt the player 1 for their input
      const player1Input = prompt("Enter the position for the marker of Player 1:");

      // Validate that the player input is a proper number
      if (player1Input > 0 && player1Input <= gameboardLength) {
        const arrPosition = player1Input - 1;
        if (gameboardArr[arrPosition] == "") {
          gameboardArr.splice(arrPosition, 1, player1.marker);
          player1.array.splice(arrPosition, 1, player1.marker);
          console.log(gameboardArr);
        } else {
          alert("The position in the array is filled");
        }
      } else {
        console.error("The number is beyond the scope of the array");
      }

      // Increment the counter variable after player 1 inserts their input
      playerMoveCounter++;

      // Check if the total game moves are above the minimum threshold
      if (playerMoveCounter >= arrayVar) {
        // Create a function to check the horizontal matches of the player
        const player1Horizontal = () => {
          for (let i = 0; i < gameboardLength; i+=3) {
            let x = 0;
            let k = i + 3;
            for (let j = i; j < k; j++) {
              if (player1.array[j] === player1.marker) {
                x++;            
              }
              if (x === 3) {
                return x;
              }
            }
          }
          return;
        }

        // Create a function to check the vertical matches of the player
        const player1Vertical = () => {
          for (let i = 0; i < 3; i++) {
            let x = 0;
            let k = i + 7;
            for (let j = i; j < k; j+=3) {
              if (player1.array[j] === player1.marker) {
                x++;            
              }
              if (x === 3) {
                return x;
              }
            }
          }
          return;
        }

        // Create a function to check the diagonal matches of the player
        const player1Diagonal = () => {
          let x = 0; y = gameboardLength;
          if (player1.array[x] === player1.marker) {
            let c = 0;
            for (let i = x; i < y; i+= 4) {
              if (player1.array[i] === player1.marker) {
                c++;
              }
            }
            if (c === 3) {
              return c;
            }
          }
          x = x + 2;
          y = y - 2;
          if (player1.array[x] === player1.marker) {
            let c = 0;
            for (let i = x; i < y; i+=2) {
              if (player1.array[i] === player1.marker) {
                c++;
              }
            }
            if (c === 3) {
              return c;
            }
          }
          return;
        }
        
        // Check if the player matches the horizontal function
        if (player1Horizontal() === 3) {
          console.log(`${player1.name} Wins!`);
          break;
        }

        // Check if the player matches the vertical function
        else if (player1Vertical() === 3) {
          console.log(`${player1.name} Wins!`);
          break;
        }

        // Check if the player matches the diagonal function
        else if (player1Diagonal() === 3) {
          console.log(`${player1.name} Wins!`);
          break;
        }

        // Check if the total moves is equal to the length of the array
        else if (playerMoveCounter === gameboardLength) {
          console.log("No one Wins!");
          break;
        }
      }

      // Prompt the player 2 for their input
      const player2Input = prompt("Enter the position for the marker of Player 2:");

      // Validate that the player input is a proper number
      if (player2Input > 0 && player2Input <= gameboardLength) {
        const arrPosition = player2Input - 1;
        if (gameboardArr[arrPosition] == "") {
          gameboardArr.splice(arrPosition, 1, player2.marker);
          player2.array.splice(arrPosition, 1, player2.marker);
          console.log(gameboardArr);
        } else {
          alert("The position in the array is filled");
        }
      } else {
        console.error("The number is beyond the scope of the array");
      }

      // Increment the counter variable after player 2 inserts their input 
      playerMoveCounter++;

      // Check if the total game moves are above the minimum threshold
      if (playerMoveCounter >= arrayVar) {

        // Create a function to check the horizontal matches of the player
        const player2Horizontal = () => {
          for (let i = 0; i < gameboardLength; i+=3) {
            let x = 0;
            let k = i + 3;
            for (let j = i; j < k; j++) {
              if (player2.array[j] === player2.marker) {
                x++;            
              }
              if (x === 3) {
                return x;
              }
            }
          }
          return;
        }

        // Create a function to check the vertical matches of the player
        const player2Vertical = () => {
          for (let i = 0; i < 3; i++) {
            let x = 0;
            let k = i + 7;
            for (let j = i; j < k; j+=3) {
              if (player2.array[j] === player2.marker) {
                x++;            
              }
              if (x === 3) {
                return x;
              }
            }
          }
          return;
        }

        // Create a function to check the diagonal matches of the player
        const player2Diagonal = () => {
          let x = 0; y = gameboardLength;
          if (player2.array[x] === player2.marker) {
            let c = 0;
            for (let i = x; i < y; i+= 4) {
              if (player2.array[i] === player2.marker) {
                c++;
              }
            }
            if (c === 3) {
              return c;
            }
          }
          x = x + 2;
          y = y - 2;
          if (player2.array[x] === player2.marker) {
            let c = 0;
            for (let i = x; i < y; i+=2) {
              if (player2.array[i] === player2.marker) {
                c++;
              }
            }
            if (c === 3) {
              return c;
            }
          }
          return;
        }
        
        // Check if the player matches the horizontal function
        if (player2Horizontal() === 3) {
          console.log(`${player2.name} Wins!`);
          break;
        }

        // Check if the player matches the vertical function
        else if (player2Vertical() === 3) {
          console.log(`${player2.name} Wins!`);
          break;
        }

        // Check if the player matches the horizontal function
        else if (player2Diagonal() === 3) {
          console.log(`${player2.name} Wins!`);
          break;
        }
      }
    }
  }
  return {createPlayer1, createPlayer2, gameflow}
})();

game.createPlayer1();
game.createPlayer2();
game.gameflow();