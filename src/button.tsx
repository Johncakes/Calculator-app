import React from "react"

function buttonNums(
  nums:any, 
  setClickedButton:any,
  ){ 
  return(
    <div
      className ="flex flex-row justify-evenly text-white">
        <button className="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2" onClick={() => setClickedButton((nums).toString())}
        >
          {nums}
        </button>
        <button className="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2" onClick={() => setClickedButton((nums+1).toString())}
        >
          {nums+1}
        </button>
        <button className="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2" onClick={() => setClickedButton((nums+2).toString())}
        >
          {nums+2}
        </button>
    </div>
  )
}
export function SideFunctions(
    props:{
    setClickedButton:any,
    }
  ){
  return(
    <div className="flex flex-col text-white">
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('/')}
      >
        ÷
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('*')}
      >
        x
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('-')}
      >
        -
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('+')}
      >
        +
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-green-700
         flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('=')}
      >
        =
      </button>
    </div>
  )
}
export function TopFunctions(
    props:{
    setClickedButton:any,
    }
  ){
  return(
    <div className ="flex justify-evenly text-white">
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('clear')}
      >
        C
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('()')}
      >
        ( )
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('%')}
      >
        %
      </button>
    </div>
  )
}

export function Numbers(
props:{
  setClickedButton:any,
}
) 
{
  let numberList = []
  for(let i = 0; i < 9; i+= 3){
    numberList.push(<li key ={i}>{buttonNums(i+1, props.setClickedButton)}</li>)
  }
  return(
    <>
      <div className = "flex flex-col">
        <ul className ="flex flex-col-reverse">
          {numberList}
        </ul>
      </div>
      <div className= "flex flex-col">
        <div className ="flex justify-evenly text-white">
          <button 
            className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
            onClick={() => props.setClickedButton((-1).toString())}
          >
            +/-
          </button>
          <button 
            className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
            onClick={() => props.setClickedButton('0')}
          >
            0
          </button>
          <button 
            className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
            onClick={() => props.setClickedButton('.')}
          >
            . 
          </button>
        </div>
      </div>
    </>
  )
}