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

    var images = [
        "https://i.postimg.cc/HLGCVdhn/1.png",
        "https://i.postimg.cc/pXpNCmNy/10.png",
        "https://i.postimg.cc/Qt0Pk30p/11.png",
        "https://i.postimg.cc/SKbwmVnz/12.png",
        "https://i.postimg.cc/R012hftp/13.png",
        "https://i.postimg.cc/DZ2HXZdv/14.png",
        "https://i.postimg.cc/XqqPszzt/15.png",
        "https://i.postimg.cc/br5BWRXr/16.png",
        "https://i.postimg.cc/CK06312G/17.png",
        "https://i.postimg.cc/ZYs2WJ9m/18.png",
        "https://i.postimg.cc/R0Tb4mrj/19.png",
        "https://i.postimg.cc/TPrvbFz9/2.png",
        "https://i.postimg.cc/gkw5R1RZ/20.png",
        "https://i.postimg.cc/fT6Pv5jg/21.png",
        "https://i.postimg.cc/zB8ZFp51/3.png",
        "https://i.postimg.cc/J0YfmLX1/4.png",
        "https://i.postimg.cc/k4sr18XR/5.png",
        "https://i.postimg.cc/bNM7Bq8g/6.png",
        "https://i.postimg.cc/c1DyfQbV/7.png",
        "https://i.postimg.cc/rswBvmKn/8.png",
        "https://i.postimg.cc/W1kBRx1v/9.png",
        "https://i.postimg.cc/dVrxNd5Q/site-icon-2.png",
    ]

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            x[i][j] = images[counter];
            counter++;
            if (counter > 22) {
                counter = 0;
            }
        }

    }
    console.log(x);

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10">
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