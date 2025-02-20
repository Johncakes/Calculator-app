import React from "react";

export default function Button(props: {
  setClickedButton: React.Dispatch<React.SetStateAction<string>>;
}) {
  const nums: string[] = [
    "C",
    "CE",
    "()",
    "/",
    "9",
    "8",
    "7",
    "*",
    "6",
    "5",
    "4",
    "-",
    "3",
    "2",
    "1",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  let row = [];
  for (let i = 0; i < nums.length; i += 4) {
    let col = [];
    for (let j = 0; j < 4; j++) {
      col.push(
        <button
          key={nums[i + j]}
          className="rounded-full w-full h-4/6 sm:w-14 sm:h-14 short:h-4/6 bg-neutral-700 text-white flex items-center justify-center m-2"
          onClick={() => props.setClickedButton(nums[i + j])}
        >
          {nums[i + j]}
        </button>
      );
    }
    row.push(
      <div
        key={"row " + (i / 4 + 1)}
        className="flex flex-row justify-between h-1/4"
      >
        {col}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full sm:w-80 h-full">{row}</div>
    </>
  );
}
