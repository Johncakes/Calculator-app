import React, {useEffect} from 'react';
import { useState } from 'react';
import './index.css';
import { Numbers, TopFunctions, SideFunctions } from './button'; 
import { Calc } from './calc';

export default function App(){
  const [totalValue, setTotalValue] = useState(0);
  const [display , setDisplay] = useState('0');
  const [clickedNumber, setClickedNumber] = useState('');
  const [clickedOperator, setClickedOperator] = useState('');
  const [clickedButton, setClickedButton] = useState('');

  Calc(clickedButton,totalValue,display, setTotalValue, setDisplay, setClickedButton);
  return(
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='flex flex-col justify-center items-end w-80 h-4/6 bg-black rounded-md'>

          <div className ="flex flex-col-reverse w-full h-1/4 rounded-t-sm bg-slate-100">
            <div className = "flex flex-row-reverse text-4xl w-full">
              {display}
            </div>
          </div>

          <div className='flex justify-center items-center w-full h-3/4 p-3 bg-zinc-900'>
            <div className='flex flex-col'>
              <TopFunctions
                setClickedButton={setClickedButton}
              />
              <Numbers 
                setClickedButton={setClickedButton}
              />
            </div>
            <div className ="flex">
              <SideFunctions
                setClickedButton={setClickedButton}
                
              />
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}