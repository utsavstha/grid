import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const ImageHolder = ({ preview, remove }) => {
    return (
        <div>
            <FaWindowClose onClick={() => remove(preview.name)} />
            <img src={preview.preview} style={{ width: "200px" }} alt="preview"></img>
        </div>
    );

}

export default ImageHolder;