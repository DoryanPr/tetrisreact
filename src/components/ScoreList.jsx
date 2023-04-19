import React, {useEffect, useState} from 'react';
import axios from "axios";


export default function ScoreList() {

    const [list, setList] = useState(null);


    useEffect(() => {
        axios
            .get(`https://tetris-symfo.sf4.p81.dbm-local.com/api/resultat`)
            .then((res) => {
                const sortedData = res.data.data.sort((a, b) => parseInt(b.result) - parseInt(a.result));
                setList(sortedData)
            })
    }, []);

    return (
        <div className={'ranking'}>
            {
                list?.map((res, key) => {
                    return (
                        <div key={key}>

                            <span className={'score'}>{res.score}</span> - {res.pseudo ? res.pseudo : "Anonyme"}

                            {
                                res.image && (
                                    <img src={`https://tetris-symfo.sf4.p81.dbm-local.com/uploads/avatar/${res.image}`} className={'avatar'} alt=""/>
                                )
                            }
                        </div>
                    )
                })
            }

        </div>
    );
}

ScoreList.propTypes = {};