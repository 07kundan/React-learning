import { useState } from 'react';
import Square from "./square"

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);

    const [squares, setSquares] = useState(Array(9).fill(null));

    function checking() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null)
                return false;
        }
        return true;
    }

    function handleClick(i) {

        // if there is anything (not null) in array index it return true
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        // const nextSquares = squares.slice();
        // console.log(nextSquares.length);
        if (xIsNext) {
            squares[i] = "X";
        } else {
            squares[i] = "O";
        }

        setSquares(squares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else if (checking() && winner == null) {
        status = "Draw"
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status ">{status}</div>
            <div className="board-row flex">
                <Square value={squares[0]} squareClick={() => handleClick(0)} />
                <Square value={squares[1]} squareClick={() => handleClick(1)} />
                <Square value={squares[2]} squareClick={() => handleClick(2)} />
            </div>
            <div className="board-row flex">
                <Square value={squares[3]} squareClick={() => handleClick(3)} />
                <Square value={squares[4]} squareClick={() => handleClick(4)} />
                <Square value={squares[5]} squareClick={() => handleClick(5)} />
            </div>
            <div className="board-row flex">
                <Square value={squares[6]} squareClick={() => handleClick(6)} />
                <Square value={squares[7]} squareClick={() => handleClick(7)} />
                <Square value={squares[8]} squareClick={() => handleClick(8)} />
            </div>
        </>
    )

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}