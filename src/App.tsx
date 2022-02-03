import React, {useEffect} from 'react';
import { useState } from 'react';
import './index.css';
import { Numbers } from './button'; 
import { Calc } from './calc';

export default function App(){
  const [bracketAmount, setBracketAmount] = useState(0);
  const [display , setDisplay] = useState('0');
  const [clickedButton, setClickedButton] = useState('');

  Calc(bracketAmount,clickedButton,display,setBracketAmount, setDisplay, setClickedButton);
  return(
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='flex flex-col justify-center items-end w-screen h-screen sm:h-3/5 sm:w-80  bg-black rounded-md'>

          <div className ="flex flex-col-reverse tight:w-screen w-full h-1/4 rounded-t-sm bg-slate-100">
            <div className = "flex flex-row-reverse break-words px-4 text-4xl w-screen sm:w-80">
              {display}
            </div>
          </div>

          <div className='flex justify-center items-center w-full h-3/4 p-3 bg-zinc-900'>
            <Numbers 
              setClickedButton={setClickedButton}
            />
          </div> 
        </div>
      </div>
    </>
  )
}