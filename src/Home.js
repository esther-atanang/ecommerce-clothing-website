import React from 'react'
import Display from './Display'
import Questions from './FAQ'
import Footer from './Footer'
const Home = ({clothes, currentId, handleLeave, handleMouse, handleItem}) => {
  return (
    <div>
        <div className="displays">
         
         {clothes.map((value)=><Display key={value.id} clothes={clothes}  id={value.id} name={value.name} onhandleClick={handleItem} image={value.id === currentId ? value.images.plain : value.images.fold} price={value.price} rating={value.rating} onHandleMouseEnter={handleMouse} onHandleLeave={handleLeave} review={value.reviews}/>)}
        </div> 
    </div>
  )
}

export default Home