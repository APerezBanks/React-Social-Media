import './index.css';

export const PhotoContainer = ({ photo }) => {
    return (
        <div className= "images" >
        {/* <p>{photo.author}</p> */}
        <img src={photo.download_url} alt="lorem pcisum random "/>
        </div>
    )
};