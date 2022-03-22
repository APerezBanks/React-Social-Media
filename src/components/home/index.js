import {useState} from "react";
import { PhotoContainer } from "../photoContainer";
import './index.css';

export const Home = () => {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        try {

            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setPhotos(data);
            console.log(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <>
       
        <button className="buttonCool" onClick={fetchPhotos}> Click me ! </button>
        <div className = "insidePic">
        {photos.map((item, index) =>(
        
        <PhotoContainer photo={item}/>
        ))}
        </div>
        </>
    );
};