//Takes in squares as an arguements as the current board state.
export function calculateWinner(squares) {
  //Winning conditions
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    //Destructures out array values
    const [a, b, c] = lines[i];
    //Check if there is a player move on the first row, check if first value equals the second value, check then if the first value equals the third value,
    //if they match then we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  //Otherwise return null because there is  no winner
  return null;
}
