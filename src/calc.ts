export function Calc(bracketAmount:number,clickedButton:string, display:string, setBracketAmount:any ,setDisplay:any, setClickedButton:any)
{
  const operatorList:string[] = ['+','-','*','/','%',]
  const bracket:string[] = ['(',')','()']
  let hasBracketOpened = false;
  let tempBracketAmount = bracketAmount;

  // console.log('display = ', display)
  if(clickedButton)
  {
    // Not oper X oper
    if(operatorList.includes(display[display.length-1]) && operatorList.includes(clickedButton)){
      // console.log('op = ', display[display.length-1], ' op2 = ', clickedButton)
    }
    else{
      switch(clickedButton){
        case '+/-':
          const neg = +(display) * -1 
          setDisplay(neg.toString())
          break;
        case 'CE':
          if(display.length > 1){
            setDisplay(display.slice(0,display.length-1))
          }
          else{
            setDisplay('0');
          }
          break;
        case 'C':
          console.log('clear')
          setDisplay('0')
          break;
        case '()':
          // console.log('after = bracketAmount = ', bracketAmount)
          //Check if there is an opened bracket
          tempBracketAmount = 0;
          for(let i =0; i < display.length; i++){
            if(display[i] === '('){
              tempBracketAmount += 1;
          // console.log('TempBracketAmount = ', tempBracketAmount)
              if (tempBracketAmount >= 1){
                hasBracketOpened = true;
              }
            }
            else if(display[i] === ')'){
              tempBracketAmount -= 1;
              if(tempBracketAmount <= 0){
                hasBracketOpened = false;
              }
            }
          }
          // console.log('TempBracketAmount = ', tempBracketAmount)
          if (hasBracketOpened === false){
            // console.log('No brackets');
            //If there is a operator before this
            if(operatorList.includes(display[display.length-1])){
              setDisplay(display.concat('('))
            }
            //If there is a number/bracket before this
            else{
              if(display[display.length-1] === '0' && display.length === 1){
                setDisplay('(')
                // console.log(display)
              }
              else{
                setDisplay(display.concat('*('))
              }
            }
          }
          else{
            // console.log('Brackets Opened');
            //If there is a bracket before this
            if(display[display.length-1] === '(' || operatorList.includes(display[display.length-1])){
              setDisplay(display.concat('('))
            }
            else{
              tempBracketAmount -= 1;
              setDisplay(display.concat(')'))
              if (bracketAmount <= 0){
                // console.log('bracket is all closed')
                hasBracketOpened = false;
              }
            }
          }
          break;
          case '.':
            if(display.length<= 1){
              setDisplay(display.concat(clickedButton))
            }
          else{
            let hasDecimal = false;
            for(let i =0; i < display.length; i++){
              if(display[i] === '.'){
                hasDecimal = true;
              }
              if(operatorList.includes(display[i])){
                hasDecimal = false;
              }
            }
            if (hasDecimal === false){
              if(display[display.length-1] === '0'){
                setDisplay(display.concat(clickedButton))
              }
              else{
                setDisplay(display.concat('0'+clickedButton))
              }
            };
          }
          break
          case '=':
            if(display[display.length-1] === '%'){
              setDisplay((+(display)*0.01).toString());
            }
          else{
            //Must not be an operator at the end
            if(!operatorList.includes(display[display.length-1]) && display[display.length-1] !== '(' && bracketAmount === 0){
              setDisplay(eval(display).toString());
            }
          }
          break;
          default:
            if(display === '0'){
              if(clickedButton !== '.' && !operatorList.includes(clickedButton)){
                setDisplay(clickedButton)
              }
            }
            else{
              //if last was bracket
              if(display[display.length-1] === ')'){
                // console.log('last was', display[display.length-1])
                if(operatorList.includes(clickedButton)){
                  setDisplay(display.concat(clickedButton));
                }
                else{
                  setDisplay(display.concat('*'+clickedButton))
                }
              }
              else if(display[display.length-1] === '('){
              if(clickedButton !== '*' && clickedButton !== '/'){
                setDisplay(display.concat(clickedButton));
              }
            }
            else{
              setDisplay(display.concat(clickedButton));
            }
          }
        }
    }
    // console.log('right out, = ', display[display.length-1])
    setClickedButton('')
    setBracketAmount(tempBracketAmount)
  }
}


