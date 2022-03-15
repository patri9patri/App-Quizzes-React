import * as React from 'react';
import { LangContext } from '../../App';
import { useContext } from "react";


export default function Home() {
  const lang = useContext(LangContext);
  
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>{lang.dictionary["home"]}</h2>
      <div className='handwritten'>{lang.dictionary["body"]}</div>
    </main>
  );
}