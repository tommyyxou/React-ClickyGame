import React from 'react';
import '../App.css';

function ScoreBoard (props) {

    return(
        <div className="scoreStyle">
            <div className="row">
                <span className="col-4">Monster Hunter Memory Game</span>
                <span className="col-4">{props.statusMsg}</span>
                <span className="col-2">The Score is {props.score}</span>
                <span className="col-2">The High Score is {props.highScore}</span>
            </div>
            
        </div>
    )
}

export default ScoreBoard;