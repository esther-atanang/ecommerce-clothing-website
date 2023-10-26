import star from "./star.png"
import {Link} from 'react-router-dom'
function Display({name,image,price,clothes,rating,id,onHandleMouseEnter,onhandleClick,onHandleLeave,review}){
    return(
       <div className="card">
        <Link to={"/" + clothes[(id - 1)].name.replace(/\s+/g, "-")}>
            <div className="image-card" onClick={()=>{onhandleClick(id)}} >
                <img onMouseEnter={()=>{onHandleMouseEnter(id)}} onMouseLeave={onHandleLeave} src={image} alt="clothes"/>
            </div>
        </Link>
        
         <div className="content">
                <h4 className="product-name" onClick={()=>{console.log("you clicked on me")}}>{name}</h4>
                <p className="price">{price}</p>
                <div className="rate">
                     <div className="ratings" >
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                     </div>
                     <div className="review"><p>{review} reviews</p></div>
                </div>
         </div>
       </div>
    )
}

export default Display;