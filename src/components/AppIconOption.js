import React, { useState } from 'react';
import { nanoid } from 'nanoid'

const AppIconOption = () => {
    const [applePlatforms, setApplePlatforms] = useState([
        {
            name: "iPhone",
            sizeCount: "11"
        },
        {
            name: "iPad",
            sizeCount: "13"
        },
        {
            name: "Watch",
            sizeCount: "8"
        },
        {
            name: "Mac",
            sizeCount: "11"
        },
    ]);
    return (
        <div className="flex-1 max-w-lg m-2">
            <p className="text-gray-700 border-b-2 pb-2 border-dashed">Drag or select an app icon image (1024x1024) to generate different app icon sizes for all platforms</p>
            <p className="text-lg pt-2 text-center font-medium">iOS and macOS</p>

            {applePlatforms.map((platform) => (
                <div className="flex items-baseline space-x-2 mb-2" key={nanoid()}>
                    <input type="checkbox" name="" id="" className="inline-block" />
                    <p className="text-gray-700"> <span className="text-black font-medium">{platform.name}</span> - {platform.sizeCount} different sizes and files </p>
                </div>
            ))}

            <p className="text-lg pt-2 text-center font-medium border-t-2 border-dashed">Android</p>
            <div className="flex items-baseline space-x-2">
                <input type="checkbox" name="" id="" className="inline-block" />
                <p className="text-gray-700"> <span className="text-black font-medium">Android</span> - 4 different sizes and files </p>
            </div>
            <div className="flex space-x-4 border-2 mx-auto mt-6 rounded-md">
                <p className="p-2 border-r-2 bg-gray-100">File name</p>
                <input className="outline-none" type="text" placeholder="ic_launcher.png" />
            </div>
            <button class="bg-orange-400 hover:bg-orange-300 text-white font-medium py-2 px-4 rounded inline-flex items-center mt-8 focus:outline-none">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <p>GENERATE</p>
            </button>
        </div>
    );
}

export default AppIconOption;