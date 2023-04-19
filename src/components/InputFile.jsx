import React, {useRef} from 'react';
import {func, object} from "prop-types";


export default function InputFile({file, setFile}) {
    const inputRef = useRef(null)

    return (
        <div>
            <input
                ref={inputRef}
                type={'file'}
                onChange={e => {
                    const file = e.target.files[0];
                    setFile(file);
                }}/>
        </div>
    );
}

InputFile.propTypes = {
    file: object,
    setFile: func,
};