import * as p from "../chessPieces/index"
import React from 'react'
import Draggable from 'react-draggable'
import "./ChessBoard.css"


const boardUpdate = () => {
    let j = 0;
    let board = [];
    for (let i = 0; i < (8*8); i++) {
        if (i % 8 === 0) j++;
        if ((i + j) % 2 === 0)
            board.push(
                <div  className="black">
                    <Draggable key={i} >
                        <img src={p.boardSetUp[j-1][i % 8]} draggable={"false"}></img>
                    </Draggable>
                </div>
            );
        else
            board.push(
                <div  className="white">
                <Draggable key={i}>
                    <img src={p.boardSetUp[j-1][i % 8]}  draggable={"false"}></img>
                </Draggable>
                    </div>
            );
    }
    return board;
}


const ChessBoard = () => {

    return (
              
    <div className="board">
        {boardUpdate()}
    </div> 

    )
}

export default ChessBoard;