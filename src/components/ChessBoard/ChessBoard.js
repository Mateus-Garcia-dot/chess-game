import * as p from "../chessPieces/index"
import React from 'react'
import "./ChessBoard.css"


const ChessBoard = () => {
    const createBoard = () => {
        let j = 0;
        let board = [];
        for (let i = 0; i < (8*8); i++) {
            if (i % 8 == 0) j++; 
            if ((i + j) % 2 === 0) 
                board.push(
                <div key={i} className="black">
                    <img src={p.boardSetUp[j-1][i % 8]}></img>
                </div>);
            else
                board.push(
                <div key={i} className="white">
                    <img src={p.boardSetUp[j-1][i % 8]}></img>
                </div>);
        }
        return board;
    }
  
    return (
              
    <div className="board">
        {createBoard()}
    </div> 

    )
}

export default ChessBoard;