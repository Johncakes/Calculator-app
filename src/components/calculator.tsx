import Button from "@/components/button";
import { useState } from "react";
import { Calc } from "@/pages/calc";

export default function Calculator() {
  const [bracketAmount, setBracketAmount] = useState(0);
  const [display, setDisplay] = useState("0");
  const [clickedButton, setClickedButton] = useState("");

  Calc(
    bracketAmount,
    clickedButton,
    display,
    setBracketAmount,
    setDisplay,
    setClickedButton
  );
  return (
    <div className="flex flex-col h-3/5 w-2/3 rounded-lg bg-black">
      {/* <div className="flex flex-col-reverse tight:w-screen w-full h-1/4 rounded-t-sm bg-slate-100">
        <div className="flex flex-row-reverse break-words px-4 text-4xl w-screen sm:w-80">
          {display}
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-3/4 p-3 bg-zinc-900">
        <Button setClickedButton={setClickedButton} />
      </div> */}
    </div>
  );
}
