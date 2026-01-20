const game = (function () {
  const createPlayer1 = (name) => {
    const marker = "X";
    return { name, marker };
  };

  const createPlayer2 = (name) => {
    const marker = "O";
    return { name, marker };
  };

  const gameflow = () => {
    let player1Name = prompt("Enter the name of Player 1:");
    let player2Name = prompt("Enter the name of Player 2:");

    const Player1 = createPlayer1(player1Name);
    const Player2 = createPlayer2(player2Name);

    const boxes = document.querySelectorAll(".box");

    let currentPlayer = Player1;
    let totalMoves = 0;

    function checkPlayerTurn(event) {
      if (currentPlayer === Player1) {
        if (event.target.innerText === "") {
          event.target.innerText = Player1.marker;
          totalMoves++;
          currentPlayer = Player2;
        }
      } else if (currentPlayer === Player2) {
        if (event.target.innerText === "") {
          event.target.innerText = Player2.marker;
          totalMoves++;
          currentPlayer = Player1;
        }
      }

      if (totalMoves >= 5) {
        function checkRows() {
          function checkFirstRow() {
            let player1Moves = 0;
            let player2Moves = 0;

            const firstRows = document.querySelectorAll(".first-row");

            firstRows.forEach((firstRow) => {
              if (firstRow.innerText === Player1.marker) {
                player1Moves++;
              } else if (firstRow.innerText === Player2.marker) {
                player2Moves++;
              }
            });

            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }

          function checkSecondRow() {
            let player1Moves = 0;
            let player2Moves = 0;

            const secondRows = document.querySelectorAll(".second-row");

            secondRows.forEach((secondRow) => {
              if (secondRow.innerText === Player1.marker) {
                player1Moves++;
              } else if (secondRow.innerText === Player2.marker) {
                player2Moves++;
              }
            });

            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }

          function checkThirdRow() {
            let player1Moves = 0;
            let player2Moves = 0;

            const thirdRows = document.querySelectorAll(".third-row");

            thirdRows.forEach((thirdRow) => {
              if (thirdRow.innerText === Player1.marker) {
                player1Moves++;
              } else if (thirdRow.innerText === Player2.marker) {
                player2Moves++;
              }
            });

            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }

          const firstRow = checkFirstRow();
          const secondRow = checkSecondRow();
          const thirdRow = checkThirdRow();

          if (
            firstRow === Player1 ||
            secondRow === Player1 ||
            thirdRow === Player1
          ) {
            return Player1;
          } else if (
            firstRow === Player2 ||
            secondRow === Player2 ||
            thirdRow === Player2
          ) {
            return Player2;
          }
        }
        function checkColumns() {
          function checkFirstColumn() {
            let player1Moves = 0;
            let player2Moves = 0;

            const firstColumns = document.querySelectorAll(".first-column");

            firstColumns.forEach((firstColumn) => {
              if (firstColumn.innerText === Player1.marker) {
                player1Moves++;
              } else if (firstColumn.innerText === Player2.marker) {
                player2Moves++;
              }
            });
            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }
          function checkSecondColumn() {
            let player1Moves = 0;
            let player2Moves = 0;

            const secondColumns = document.querySelectorAll(".second-column");

            secondColumns.forEach((secondColumn) => {
              if (secondColumn.innerText === Player1.marker) {
                player1Moves++;
              } else if (secondColumn.innerText === Player2.marker) {
                player2Moves++;
              }
            });
            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }
          function checkThirdColumn() {
            let player1Moves = 0;
            let player2Moves = 0;

            const thirdColumns = document.querySelectorAll(".third-column");

            thirdColumns.forEach((thirdColumn) => {
              if (thirdColumn.innerText === Player1.marker) {
                player1Moves++;
              } else if (thirdColumn.innerText === Player2.marker) {
                player2Moves++;
              }
            });
            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }

          const firstColumn = checkFirstColumn();
          const secondColumn = checkSecondColumn();
          const thirdColumn = checkThirdColumn();

          if (
            firstColumn === Player1 ||
            secondColumn === Player1 ||
            thirdColumn === Player1
          ) {
            return Player1;
          } else if (
            firstColumn === Player2 ||
            secondColumn === Player2 ||
            thirdColumn === Player2
          ) {
            return Player2;
          }
        }
        function checkDiagonals() {
          function checkFirstDiagonal() {
            let player1Moves = 0;
            let player2Moves = 0;

            const firstDiagonals = document.querySelectorAll(".first-diagonal");

            firstDiagonals.forEach((firstDiagonal) => {
              if (firstDiagonal.innerText === Player1.marker) {
                player1Moves++;
              } else if (firstDiagonal.innerText === Player2.marker) {
                player2Moves++;
              }
            });

            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }
          function checkSecondDiagonal() {
            let player1Moves = 0;
            let player2Moves = 0;

            const secondDiagonals =
              document.querySelectorAll(".second-diagonal");

            secondDiagonals.forEach((secondDiagonal) => {
              if (secondDiagonal.innerText === Player1.marker) {
                player1Moves++;
              } else if (secondDiagonal.innerText === Player2.marker) {
                player2Moves++;
              }
            });

            if (player1Moves === 3) {
              return Player1;
            } else if (player2Moves === 3) {
              return Player2;
            }
          }

          const firstDiagonal = checkFirstDiagonal();
          const secondDiagonal = checkSecondDiagonal();

          if (firstDiagonal === Player1 || secondDiagonal === Player1) {
            return Player1;
          } else if (firstDiagonal === Player2 || secondDiagonal === Player2) {
            return Player2;
          }
        }

        const rows = checkRows();
        const columns = checkColumns();
        const diagonals = checkDiagonals();

        if (rows === Player1 || columns === Player1 || diagonals === Player1) {
          alert(`${Player1.name} wins!`);

          boxes.forEach((box) => {
            box.removeEventListener("click", checkPlayerTurn);
          });
        } else if (
          rows === Player2 ||
          columns === Player2 ||
          diagonals === Player2
        ) {
          alert(`${Player2.name} wins!`);

          boxes.forEach((box) => {
            box.removeEventListener("click", checkPlayerTurn);
          });
        } else if (totalMoves === boxes.length) {
          alert("No one wins!");
        }
      }
    }

    boxes.forEach((box) => {
      box.addEventListener("click", checkPlayerTurn);
    });
  };
  return { gameflow };
})();
game.gameflow();
