import { useState } from "react";

function Player({initialName,symbol,isActive}){
    const [playerName,setPlayerName] = useState(initialName);
    const [ isEditing,setIsEditing ] = useState(false);

    
    function handleEditClick(){
      // setIsEditing(!isEditing); //isEditing? false: true
      setIsEditing((editing) => !editing);
    };
    
    function handleChenge(event){
      // console.log(event);
      setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit';

    if(isEditing){
      editablePlayerName=<input type="text" required value={playerName} onChange={handleChenge} />;
      // btnCaption='Save';
    }

    return(
        <li className={isActive? 'active': undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick} >{isEditing? 'Save': 'Edit'}</button>
        </li>
    );
};

export default Player;