// import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function GameBoard({onSelectSquare,turns}){
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square,player} = turn;
        const {row,col} = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard,setGameBoard] = useState(initialGameBoard);  //initialは初期値

    // //Xを表示するfunc
    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });
    //     onSelectSquare();
    // }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectSquare(rowIndex,colIndex )}
                                    disabled={playerSymbol !== null} 
                                >
                                        {playerSymbol}
                                        </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
            
        </ol>
    );
};

export default GameBoard;