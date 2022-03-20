import React from 'react';
import cute  from '../images/cute.jpeg';


const Creator = () =>{
  return (
    <div className='image'>
      <h3 className='h3'>The Creator of this amazing app</h3>
      <div className='div01'>
        <img src={cute} alt="meme"/>;
      
      </div>
       

      
    </div>
  );
}
export default Creator;

