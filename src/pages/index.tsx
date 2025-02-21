import React, { useEffect } from "react";
import Calculator from "@/components/calculator";
import Header from "@/components/header";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full h-screen bg-gray-200">
        <div className="flex flex-col max-w-screen-md h-full justify-center">
          <Calculator />
        </div>
      </div>
    </>
  );
}
