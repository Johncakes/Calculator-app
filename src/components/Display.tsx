export default function Display(props: { displayValue: string }) {
  return (
    <div className="flex flex-row-reverse break-words rounded-sm p-2 min-h-14 text-4xl bg-white text-black">
      {props.displayValue}
    </div>
  );
}
