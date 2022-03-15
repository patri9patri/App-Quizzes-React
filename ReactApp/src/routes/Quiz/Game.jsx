import React from "react";

export default function Game(props){

    let array_aux = ["-","-","-","-","-","-","-","-","-","-"];
    function guardaIntroducida(respuesta){
        array_aux[props.currentQuiz]=respuesta;
        for (let i=0; i<=9; i++) {
            if(array_aux[i]==="-"){
                array_aux[i]=props.resp[i];
            }
         }
        props.setResp(array_aux);
    }



    return(
        <div className="game_style">
            <div>
            {props.quizzes[props.currentQuiz].question}
            </div>
            <input type="text" value={props.resp[props.currentQuiz]} onChange={e=>guardaIntroducida(e.target.value)}/>
        </div>
    );
}