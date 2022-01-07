import React from "react"

function buttonNums(nums:any, setClickedButton:any, clickedButton:string){ 
  let list = [];
  for(let i = 3; i > 0; i--){
    list.push(
        <button 
          className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
          onClick={() => setClickedButton((nums-i)).toString()}
        >
          {nums-i}
        </button>
    )
  }
  return(
    <div
      className ="flex justify-evenly text-white">
      {list}
    </div>
  )
}
export function SideFunctions(props:{setClickedButton:any, totalValue:number}){
  return(
    <div className="flex flex-col text-white">
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton('0')}
      >
        ÷
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton((props.totalValue/10).toString())}
      >
        x
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton((props.totalValue/10).toString())}
      >
        -
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton((props.totalValue/10).toString())}
      >
        +
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-green-700
         flex items-center justify-center m-2"
        onClick={() => props.setClickedButton((props.totalValue/10).toString())}
      >
        =
      </button>
    </div>
  )
}
export function TopFunctions(props:{setClickedButton:any, totalValue:number}){
  return(
    <div className ="flex justify-evenly text-white">
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton(0)}
      >
        C
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
      >
        ( )
      </button>
      <button 
        className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        onClick={() => props.setClickedButton((props.totalValue*0.01).toString())}
      >
        %
      </button>
    </div>
  )
}

export function Numbers(props: {clickedButton: any, setClickedButton: any}){
  let numberList = []
  for(let i = 9; i > 0; i-= 3){
    numberList.push(buttonNums(i+1, props.setClickedButton, props.clickedButton))
  }
  return(
    <div className = "flex flex-col">
      {numberList}

      <div className ="flex justify-evenly text-white">
        <button 
          className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
          onClick={() => props.setClickedButton(props.clickedButton*-1)}
        >
          +/-
        </button>
        <button 
          className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
          onClick={() => props.setClickedButton(props.clickedButton *10)}
        >
          0
        </button>
        <button 
          className ="rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2"
        >
          . 
        </button>
      </div>
    </div>
  )
}