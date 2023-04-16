import React, {useEffect, useState} from 'react';
import axios from "axios";


export default function ScoreList() {

    const [list, setList] = useState(null);


    useEffect(() => {
        axios
            .get(`https://tetris-symfo.sf4.p81.dbm-local.com/api/score`)
            .then((res) => {
                const sortedData = res.data.data.sort((a, b) => parseInt(b.result) - parseInt(a.result));
                setList(sortedData)
                console.log('res', res)
            })
    }, []);

    console.log('list', list)

    return (
        <div className={'ranking'}>
            {
                list?.map(res => {
                    return (
                        <div>
                            <span className={'score'}>{res.result}</span> - {res.name ? res.name : "Anonyme"}
                        </div>
                    )
                })
            }

        </div>
    );
}

ScoreList.propTypes = {};