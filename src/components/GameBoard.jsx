// import { useState } from "react";



function GameBoard({onSelectSquare,board}){
    

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
            {board.map((row,rowIndex) => (
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