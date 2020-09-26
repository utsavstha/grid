import { data, process } from 'autoprefixer';
import React from 'react';
import { randomcolor } from 'randomcolor';
import { nanoid } from 'nanoid'

const Grid = () => {
    const Create2DArray = (rows) => {
        var arr = [];

        for (var i = 0; i < rows; i++) {
            arr[i] = [];
        }

        return arr;
    }

    var x = Create2DArray(10)
    var counter = 1

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            x[i][j] = "logos/" + (counter) + ".png";
            counter++;
            if (counter > 22) {
                counter = 0;
            }
        }

    }
    console.log(x);

    return (
        <div className="grid grid-cols-10">
            {Object.keys(x).map(keyOuter => {
                return Object.keys(x[keyOuter]).map(keyInner => {
                    return (
                        <img src={x[keyOuter][keyInner]} alt="Girl in a jacket" className="grid-item " key={`${keyInner}-${keyOuter}`} />

                    );
                });
            })}

        </div>
    );
}

export default Grid;