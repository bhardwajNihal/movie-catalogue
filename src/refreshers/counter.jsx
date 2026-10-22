import { useEffect, useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

  const [running, setRunning] = useState(false);

  
  useEffect(() => {
    let intID;
    if(running) {
      intID = setInterval(() => {
      setCount(prev => prev + 1 )
    }, 100);}

    // this cleanup function is necessary to clear previous setInterval instance on remounts
    // thus preventing weird counter behaviour, that's caused by previous instances stacking up, 
    // each invoking their own counter change
    return () => clearInterval(intID)
  }, [running]) 

  function reset(){
    setCount(0);
  }




  return (
    <>

    <h1>counter = {count}</h1>
    <button onClick={() => setRunning(true)}>start</button>
    <button onClick={() => setRunning(false)}>stop</button>
      <button onClick={reset} style={{backgroundColor:"blue"}}>reset</button>
    </>
  )
}