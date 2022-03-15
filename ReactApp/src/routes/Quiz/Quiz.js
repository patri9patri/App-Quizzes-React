import React, { useState, useEffect } from 'react';
import ActionBar from './ActionBar';
import Attachment from './Attachment';
import ShortCut from './Shotcut';
import Author from './Author';
import Game from './Game';
import './Styles.css';
import Countdown from '../../components/Countdown';
import loading from '../../assets/tweaking-robot.gif';
import { useContext } from "react";
import { LangContext } from '../../App';


export default function Quiz(props) {
  const url = "https://core.dit.upm.es/api/quizzes/random10wa?token=";
  const token = "8daa7224945b42b59ec7"
  const [quizzes, setQuizzes] = useState([]);
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [resp, setResp] = useState(["","","","","","","","","",""]);
  const [pause, setPause] = useState(false);
  const [num, setNum] = useState(10);

  const lang = useContext(LangContext);


  async function fetchData() {
    const res = await fetch(url+token);
    const myjson = await res.json();
    let quizzes_aux = [];
    myjson.map((itemQuizzes, indexQuizzes) => {
      quizzes_aux[indexQuizzes]=itemQuizzes;
      return 0;
      });
     
      setQuizzes(quizzes_aux);
      setTimeout(()=>{
        setisLoading(false);
      },100);	
  }

  useEffect(() => {
    fetchData();
  }, []);

  function reseteo(){
    setTimeout(()=>{
      setisLoading(false);
    },100);	
    setScore(0);
    fetchData();
    setisLoading(true);	
    }

  function siguiente(){
    let aux = currentQuiz;
    aux++;
    if(aux>9){
      aux=0;
    }
    setCurrentQuiz(aux);
  }

  function anterior(){
    let aux = currentQuiz;
    aux--;
    if(aux<0){
      aux=9;
    }
    setCurrentQuiz(aux);
  }

  function comprobarRespuesta(){
    let score_aux = 0;
    for(let i=0; i<=9;i++){
      let answers = quizzes[i].answer.trim().toLowerCase();
      let answers_introducidas = resp[i].trim().toLowerCase();
      if(answers === answers_introducidas){
        score_aux=score_aux+1;
      }
    }
    ///----NO----
    setScore(score_aux)
    setFinished(true);
    }

  return (
  <div>
    {finished ? <div className='resultado'>{lang.dictionary["resultado"]}: {score}</div>:
      <div>
        {isLoading ? <img src={loading} alt='loading' className='loading'></img> :
        <div>
          {console.log(quizzes)}
          <Countdown num={num} setNum={setNum} pause={pause} setPause={setPause} currentQuiz={currentQuiz}  siguiente={siguiente} comprobarRespuesta={comprobarRespuesta}/>
          <Attachment attachment={quizzes[currentQuiz].attachment}/>
          <Game quizzes={quizzes} currentQuiz={currentQuiz} resp={resp} setResp={setResp}/>
          <Author profileName={quizzes[currentQuiz].author.profileName}author={quizzes[currentQuiz].author} username={quizzes[currentQuiz].author.username} attachment_author={quizzes[currentQuiz].author.photo.url}/>
          <ActionBar siguiente={siguiente} anterior={anterior} comprobarRespuesta={comprobarRespuesta} reseteo={reseteo} setNum={setNum}/>
          <ShortCut quizzes={quizzes} currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} setNum={setNum}/>
        </div>
        }
      </div>
      }
  </div>
  );
}
