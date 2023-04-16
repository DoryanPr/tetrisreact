import React, {useState} from 'react';
import {number} from 'prop-types';
import axios from "axios";


export default function GameOver({score}) {

    const [pseudo, setPseudo] = useState('');

    const saveScore = () => {
        axios
            .post(`https://tetris-symfo.sf4.p81.dbm-local.com/api/score`, {result: score, name: pseudo})
            .then(() => {
                console.log('réussi')
            })
    }

    return (
        <div className={`message-gameover`}>

            <div className={'gameover-details'}>
                <h3>GAME OVER</h3>
                <span>Score : {score}</span>
            </div>

            <label htmlFor="name"></label>
            <input
                type="text"
                placeholder={"Pseudo"}
                id={'name'}
                onInput={e => setPseudo(e.target.value)}
            />

            <button onClick={saveScore}>Enregistrer</button>
            
        </div>
    );
}

GameOver.propTypes = {
    score: number,
};