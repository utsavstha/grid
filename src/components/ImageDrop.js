import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { nanoid } from 'nanoid'

import ImageHolder from './ImageHolder';
import Placeholder from './Placeholder'

const ImageDrop = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        multiple: true,
        noClick: true,
        onDrop: (acceptedFiles) => {
            const f = acceptedFiles.map((file) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            console.log(f[0]);

            setFiles([...files, f[0]])


        }
    });

    const remove = file => {
        const newFiles = [...files];     // make a var for the new array
        newFiles.splice(file, 1);        // remove the file from the array
        setFiles(newFiles);              // update the state
    };

    const images = files.map((file) => (
        <div key={nanoid()}>
            <div>
                <ImageHolder preview={file} remove={remove} />
            </div>
        </div>
    ))

    return (
        <div className="flex flex-col p-12 border-2 border-dotted flex-1 max-w-sm sm:max-w-lg m-2 bg-gray-100" {...getRootProps()}>
            <input {...getInputProps()} />

            <Placeholder visibility={files.length === 0} />
            <div className="grid grid-cols-2">
                {images}
            </div>
        </div>

    );
}

export default ImageDrop;