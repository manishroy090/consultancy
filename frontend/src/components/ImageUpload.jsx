import React, { useState } from 'react';
import imageicon from '../image/image.png';

export default function ImageUpload({name,lable}) {
    const [file, setFile] = useState();
    const handleImage = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
        
    }
    return (
        <div className={`flex flex-col space-y-4`}>

            <div className='border border-black  justify-center items-center p-20 h-52 rounded-md flex flex-col'>
                <img src={file || imageicon} defaultValue="" className='h-48 ' id={`image_preview_${name}`}></img>
            </div>
            <div className="mb-5 flex flex-col w-full ">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="user_avatar"
                >
                    {lable}
                </label>
                <input
                    name={name}
                    className="block w-full mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="imageInput"
                    onChange={handleImage}
                    type="file"
                />
               
            </div>
        </div>
    )
}
