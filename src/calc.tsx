export function Calc(props:{clickedButton:any, totalValue:number, setTotalValue:any}){

  props.setTotalValue(props.clickedButton);
  return null;
}
