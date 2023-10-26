import './App.css';
import Header from './Header'; 
import blackshirt from "./assets/images/blackshirt.png"
import foldedblackshirt from "./assets/images/blackshirt_folded.png"
import frontBlack from "./assets/images/front-blackSweats.png"
import backBlack from "./assets/images/back_black-sweatShirt.png"
import blue from "./assets/images/bluejoggers.png"
import foldedblue from "./assets/images/bluejoggers_folded.png"
import pink from "./assets/images/pinkjoggers.png"
import foldedpink from "./assets/images/pickjoggers_folded.png"
import sidePink from "./assets/images/sidePink.png"
import partPink from "./assets/images/partPink.png"
import sideBack from "./assets/images/sideBack.png"
import foldedyellow from "./assets/images/yellowhoddie_folded.png"
import yellow from "./assets/images/yellowhoddie.png"
import partYellow from "./assets/images/partYellow.png"
import backYellow from "./assets/images/backYellow.png"
import partBlueFront from "./assets/images/partBlueFront.png"
import blueFrontSweats from "./assets/images/blueFrontSweats.png"
import white from "./assets/images/whiteshirt.png"
import sideFront from "./assets/images/sideFront.png"
import backWhite from "./assets/images/backWhite.png"
import foldedwhite from "./assets/images/whiteshirt_folded.png"
import bluetee from "./assets/images/blue-tee.png"
import bluesweats from  "./assets/images/blue-sweats.png"
import partBlue from "./assets/images/partBlue.png"
import backBlue from "./assets/images/backBlue.png"
import partFront from "./assets/images/partFront.png"
import Item from './Item'
import Home from './Home';
import Display from './Display';
import Questions from './FAQ';
import Footer from './Footer.js'
import Sidebar from './Sidebar.js'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import User from './User'
import Cart from './Cart'
const clothes = [
  {
    id: 1,
    name:"Anything Goes Crewneck Vintage Black",
    images:{plain:blackshirt, fold:foldedblackshirt, front:frontBlack, back:backBlack},
    price:"$54.00",
    rating:5,
    reviews:45,
  },
  {
    id:2,
    name:"Anything Goes Sweatpants",
    images:{plain:foldedblue, fold:blue, partBack: partBlue, back:backBlue, front:partFront},
    price:"$54.00",
    rating:5,
    reviews:28,
  },
  {
    id:3,
    name:"Anything Goes Tee",
    images:{plain:white, fold:foldedwhite, back: backWhite, side: sideFront},
    price:"$30.00",
    rating:5,
    reviews:47,
  },
  {
    id:4,
    name:"Anything Goes Cats Sweatpants",
    images:{plain:foldedpink, fold:pink, side:sidePink, back:sideBack , part: partPink},
    price:"$54.00",
    rating:4.5,
    reviews:7,
  },
  {
    id:5,
    name:"Anything Goes Hoodie",
    images:{plain:yellow, fold:foldedyellow, back:backYellow, part: partYellow},
    price:"$58.00",
    rating:5,
    reviews:23,
  },
  {
    id:6,
    name:"Anything Goes Cats Crewneck",
    images:{plain:bluesweats,fold:bluetee, part:partBlueFront ,front:blueFrontSweats},
    price:"$54.00",
    rating:5,
    reviews:45,
  },
]



function App() {
const[currentId,setId] = useState(0);
const[isScroll, setScroll] = useState(false)
const[isOpen, setOpen] = useState(false)
const[currentItem, setCurrentItem] = useState(1)

useEffect(()=>{
  function handleScroll(){
    if(window.pageYOffset > 100){
      setScroll(true)
    }else{
       setScroll(false)
    }
  }
  window.scrollBy(100,100)
  window.addEventListener("scroll", handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
},[])
function handleMouse(Id){
   setId(Id)
}
 function handleLeave(){
   setId(0)
 }
 
 function handleOpen(){
   setOpen(value=>true)
 }

 function handleClose(){
   setOpen(value=>false)
 }
 
 function handleCurrent(id){
   setCurrentItem(id)
 }

 
 console.log(clothes[(currentItem - 1)].name)
  return (
    <div className="App">
     
          <Routes>
            <Route path="/" element={<Home clothes={clothes}  currentId={currentId} handleItem={handleCurrent} handleLeave={handleLeave} handleMouse={handleMouse}/>}/>
             <Route path={"/" + clothes[(currentItem - 1)].name.replace(/\s+/g, "-")} element={<Item theItem={clothes[(currentItem - 1)]} />}/>
          </Routes>
  
      {/* <Cart/> */}
      {/* <User/> */}
      {isOpen && <Sidebar/>}
       <Header isScrolling={isScroll} onOpen={handleOpen}/>
       
       
       {/* <div className="displays">
         
        {clothes.map((value)=><Display key={value.id}  id={value.id} name={value.name}  image={value.id === currentId ? value.images.plain : value.images.fold} price={value.price} rating={value.rating} onHandleMouseEnter={handleMouse} onHandleLeave={handleLeave} review={value.reviews}/>)}
       </div> 
       <Questions/> 
        <Footer/>
       */}
       <Questions/> 
         <Footer/>
    </div>
  );
}

export default App;
