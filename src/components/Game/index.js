import React, { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../helpers";
import "./style.css";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    //slice out the history we do not need, like the state afterward, because the state will be changing
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    //clone of the state we will be changing
    const squares = [...current];
    //If user clicks on an occupied square or if there is a winner, return
    //else if xIsNext is true then "X" otherwise "O"
    //setHistory state values
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to Move #${move}` : "Restart Game";
      return (
        <li className="listStyle" key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="game">
        <h2>
          {winner
            ? "Winner! Player " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
          {renderMoves()}
        </h2>
      </div>
    </>
  );
}
export default Game;
