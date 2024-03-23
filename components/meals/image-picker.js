'use client';

import classes from "./image-picker.module.css"
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();
    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)


    }

    return <div className={classes.picker}>
        <label htmlFor={name}>
            {label}
        </label>

        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} alt={"the image selected by user"} fill />}
            </div>
            <input type={"file"} id={"image"} accept={"image/png, image/jpeg"} name={name} className={classes.input} ref={imageInputRef} onChange={handleImageChange} required/>
            <button className={classes.button} type={"button"} onClick={handlePickClick}>
                Pick an image
            </button>
        </div>
    </div>

}
