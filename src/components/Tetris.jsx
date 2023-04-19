import React from 'react';
import GridBoard from "./GridBoard";
import NextBlock from "./NextBlock";
import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import MessagePopup from "./MessagePopup";


export default function Tetris() {
    return (
        <div className={'tetris'}>
            <GridBoard/>
            <NextBlock/>
            <ScoreBoard/>
            <Controls/>
            <MessagePopup/>
        </div>
    );
}

