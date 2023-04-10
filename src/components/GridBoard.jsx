import React from 'react';
import GridSquare from "./GridSquare";


export default function GridBoard(props) {

    // génère un tableau de 18 rows et 10 cols
    const grid = []
    for (let row = 0; row < 18; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }

    // The components generated in makeGrid are rendered in div.grid-board
    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}
