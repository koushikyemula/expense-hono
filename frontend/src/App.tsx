import { useState } from "react";
import { Button } from "./components/ui/button";
import { useEffect } from "node_modules/@types/react/ts5.0";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("/api/total-spent")
      .then((res) => res.json())
      .then((data) => setTotalAmount(data.total));
  }, [totalAmount]);
  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <h1 className="text-4xl">Total amount spent: {totalAmount}</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
