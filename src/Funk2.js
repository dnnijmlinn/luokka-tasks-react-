import React, { useState } from "react";

const Funk2 = () =>  {
  const [count, setCount] = useState(0);

  const increase = () =>  {
    setCount(count + 1);
  }

  return (
    <div className="marg">
       <h1>Luokkapohjainen laskuri:</h1>
       <h2>{count}</h2> 
       <button onClick={() => increase()}> Klikedi klik </button>

    </div>
)
}

export default Funk2;