import plus from "./plus-small.png"
import minus from "./minus.png"
import {useState} from 'react'
const questions = [
    {help:["Contact","FAQs","Returns & Refunds"]},
    {Account:["login","Register"]},
    {info:["1457 E. Washington Blvd","Los Angeles, CA 90021","(213) 746-0879"]}
]
function Questions(){
    return(
        <div className="questions">
         <Question name="help" values={questions[0].help}/>
         <Question name="Account"  values={questions[1].Account}/>
         <Question name="our info"  values={questions[2].info}/>
         <Updates/>
        </div>
    )
}

function Question({name, values}){
    const[isOpen, setOpen] = useState(false)
    function handleClick(){
        setOpen(value=>!value);
    }
  return(
    <div className="question">
        <div className="question-header"><h3>{name}</h3><button onClick={handleClick}><img src={isOpen ? minus : plus} alt="plus"/></button></div>
        {isOpen && <div className="list">
            <ul>
                {values.map(value=><li key={value}>{value}</li>)}
            </ul>
            </div>}
    </div>
  )
}

function Updates(){
    return(
        <div className="update">
            <h4>Get Updates</h4>
            <div className="submit">
                <input type="text" placeholder="Email"/>
                <input type="button" value="Sign Up"/>
            </div>
            <h4>@bakigirl</h4>
        </div>
    )
}

export default Questions;