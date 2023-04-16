import React from 'react'
import { useSelector } from 'react-redux'
import GameOver from "./GameOver";

export default function MessagePopup(props) {
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)
    const score = useSelector((state) => state.game.score)

    let isHidden = 'hidden'

    return (
        <>
            { gameOver && (
              <GameOver score={score}/>
            )}
            { !gameOver && !isRunning && (
                <div className={`message-popup ${isHidden}`}>
                    <h1>Pause</h1>
                </div>
            )}
        </>
    )
}
