import React from 'react';


export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Jouer</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Redémarrer</button>
        </div>
    )
}
