import React, {useState} from 'react';
import {number} from 'prop-types';
import axios from "axios";
import InputFile from "./InputFile";


export default function GameOver({score}) {

    const [pseudo, setPseudo] = useState('');
    const [file, setFile] = useState(null);

    const saveScore = () => {
        axios
            .post(`https://tetris-symfo.sf4.p81.dbm-local.com/api/resultat`, {score: score, pseudo: pseudo, image:file}, {headers: {'Content-Type': 'multipart/form-data'}})
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

            <InputFile file={file} setFile={setFile}/>

            <button onClick={saveScore}>Enregistrer</button>
            
        </div>
    );
}

GameOver.propTypes = {
    score: number,
};