import React, { useEffect } from "react";
import Calculator from "@/components/calculator";
import Header from "@/components/header";

export default function App() {
  return (
    <div className="flex flex-col h-dvh bg-gray-200">
      <Header />
      <main className="flex-1 flex justify-center h-full items-center">
        <div className="w-full h-full sm:max-w-md sm:h-3/4">
          <Calculator />
        </div>
      </main>
    </div>
  );
}
