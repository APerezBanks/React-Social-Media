import './index.css';



export const PhotoContainer = ({ photo }) => {
    return (
      
        
        <div className= "images" >
       
        <img src={photo.download_url} alt="lorem pcisum random "/>
        <div className="Ptag">  
        <p>{photo.author}</p>
        </div>  
        </div>
    )


};