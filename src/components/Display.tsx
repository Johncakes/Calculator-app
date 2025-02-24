export default function Display(props: {
  firstValue: string;
  operator: string;
  displayValue: string;
}) {
  return (
    <div className="h-1/3 bg-white flex flex-col justify-between p-2 rounded-sm">
      <div className="flex flex-row-reverse text-slate-600 text-3xl">
        {props.firstValue}
        {props.operator}
      </div>
      <div className="flex flex-row-reverse break-words sm:text-6xl text-8xl bg-white text-black h-1/3 items-end">
        {props.displayValue}
      </div>
    </div>
  );
}
