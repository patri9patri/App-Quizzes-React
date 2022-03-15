import React, {useRef, useEffect} from "react";

export default function Countdown(props){
    
    let intervalRef = useRef(); //creamos una referencia

    const decreaseNum = () => {

        props.setNum((prev) => prev-1); //actualiza num restándole 1

        if(props.num === 0) {
            props.setPause(true);
            props.siguiente();
            props.setNum(10);
            props.setPause(false);
        }

        if(props.currentQuiz === 9 && props.num===0){
            props.comprobarRespuesta();
        }

    } 

    useEffect(() => {
        props.setPause(false) //pone el estado de pausa a falso, lo que comienza el contador
        intervalRef.current = setInterval(decreaseNum, 1000); //hace que se ejecute decreaseNum cada 1000 ms o 1 s
        return () => clearInterval(intervalRef.current); //almacena la referencia al intervalo de 1000ms dentro de intervalRef.current
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decreaseNum]);

    return (
        <div className="contador">
            <div>{props.num}</div>
        </div>
    )
}