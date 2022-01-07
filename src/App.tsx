import React from 'react';
import { useState } from 'react';
import './index.css';
import { Numbers, TopFunctions, SideFunctions } from './button'; 
import { Calc } from './calc';

export default function App(){
  const [totalValue, setTotalValue] = useState(0);
  const [clickedButton, setClickedButton] = useState('');
  return(
    <>
      <Calc
        clickedButton={clickedButton}
        totalValue={totalValue}
        setTotalValue={setTotalValue}
      />
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='flex flex-col justify-center items-end w-80 h-4/6 bg-black rounded-md'>

          <div className ="flex flex-col-reverse w-full h-1/4 rounded-t-sm bg-slate-100">
            <div className = "flex flex-row-reverse text-4xl w-full">
              {totalValue}
            </div>
          </div>

          <div className='flex justify-center items-center w-full h-3/4 p-3 bg-zinc-900'>
            <div className='flex flex-col'>
              <TopFunctions
                totalValue={totalValue}
                setClickedButton={setClickedButton}
              />
              <Numbers 
                clickedButton={clickedButton}
                setClickedButton={setClickedButton}
              />
            </div>
            <div className ="flex">
              <SideFunctions
                totalValue={totalValue}
                setClickedButton={setClickedButton}
              />
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}