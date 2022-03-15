import React from "react";
import { useContext } from "react";
import { LangContext } from "../../App";
export default function ActionBar(props){

    const lang = useContext(LangContext);

    function anteriorQuiz(){
        props.anterior();
        props.setNum(10);
    }
    function siguienteQuiz(){
        props.siguiente();
        props.setNum(10);
    }
    function enviarQuiz(){
        props.comprobarRespuesta();
        props.setNum(10);
    }
    function reseteoQuiz(){
        props.reseteo();
        props.setNum(10);
    }
    return(
        <div className="button_center">
            <button onClick={reseteoQuiz} className="action-bar">{lang.dictionary["reset"]}</button>
            <button onClick={anteriorQuiz} className="action-bar">{lang.dictionary["anterior"]}</button>
            <button onClick={siguienteQuiz} className="action-bar">{lang.dictionary["siguiente"]}</button>
            <button onClick={enviarQuiz} className="action-bar">{lang.dictionary["comprobar"]}</button>
        </div>
    );
}