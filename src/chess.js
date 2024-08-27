import React, { useState } from 'react';
import './chess.css';
import blackpawn from './asserts/blackpawn.jpeg';
import blackrook from './asserts/blackrook.jpeg'
import balcking from './asserts/blackking.jpeg'
import blackbiso from './asserts/blackbishop.jpeg'
import blacknight from './asserts/blackknight.jpeg'
import blackqueen from './asserts/blackqueen.jpeg'
import whitepawn from './asserts/whitepawn.jpeg';
import whiterook from './asserts/whiterook.jpeg'
import whiteking from './asserts/whiteking.jpeg'
import whitebiso from './asserts/whitebishop (2).jpeg'
import whitenight from './asserts/whiteknight.jpeg'
import whitequeen from './asserts/whitequeen.jpeg'
const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const ChessBoard = () => {
    const [board, setBoard] = useState(initialBoard);

    const pieceImages = {
        'r': blackrook,
        'n': blacknight,
        'b': blackbiso,
        'q': blackqueen,
        'k': balcking,
        'p': blackpawn,
        'R': whiterook,
        'N': whitenight,
        'B': whitebiso,
        'Q': whitequeen,
        'K': whiteking,
        'P': whitepawn,
    };

    const renderSquare = (row, col) => {
        const piece = board[row][col];
        const isBlack = (row + col) % 2 === 1;
        return (
            <div 
                key={`${row}-${col}`}
                className={`square ${isBlack ? 'black' : 'white'}`}
                onClick={() => handleSquareClick(row, col)}
            >
                {piece && <img src={pieceImages[piece]} alt={piece} className="piece" />}
            </div>
        );
    };

    const handleSquareClick = (row, col) => {
        alert(`Square clicked: Row ${row + 1}, Col ${col + 1}`);
    };

    return (
        <div className="chessboard">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((col, colIndex) => renderSquare(rowIndex, colIndex))}
                </div>
            ))}
        </div>
    );
};

export default ChessBoard;
