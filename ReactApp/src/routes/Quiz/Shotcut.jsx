import React from "react";

export default function ShortCut(props){

    function clickBoton(num){
        props.setCurrentQuiz(num);
        props.setNum(10);
    }
    return(
    <div className="btn-group">
        <button onClick={()=>{clickBoton(0)}} className="button-row">1</button>
        <button onClick={()=>{clickBoton(1)}} className="button-row">2</button>
        <button onClick={()=>{clickBoton(2)}} className="button-row">3</button>
        <button onClick={()=>{clickBoton(3)}} className="button-row">4</button>
        <button onClick={()=>{clickBoton(4)}} className="button-row">5</button>
        <button onClick={()=>{clickBoton(5)}} className="button-row">6</button>
        <button onClick={()=>{clickBoton(6)}} className="button-row">7</button>
        <button onClick={()=>{clickBoton(7)}} className="button-row">8</button>
        <button onClick={()=>{clickBoton(8)}} className="button-row">9</button>
        <button onClick={()=>{clickBoton(9)}} className="button-row">10</button>
    </div>
        
    );
}