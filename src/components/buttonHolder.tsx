import React from "react";
export default function ButtonHolder(props: {
  setDisplayValue: (value: string) => void;
}) {
  const nums: string[][] = [
    ["C", "CE", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  return (
    <div className="grid grid-rows-5 gap-1 w-full h-full">
      {nums.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="grid grid-cols-4 gap-1">
          {row.map((buttonValue, colIndex) => (
            <button
              key={`btn-${rowIndex}-${colIndex}`}
              className="rounded-md bg-neutral-700 text-white text-xl flex items-center justify-center p-2 w-full font-bold text-center"
              onClick={() => props.setDisplayValue(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
