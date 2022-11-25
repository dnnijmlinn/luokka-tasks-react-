import React, { useState } from 'react';

function Funk1() {
  const [name, setName] = useState('Robin Hood');

  const handleNameInput = e => {
    setName(e.target.value);
};

  return (
    <div className="marg">
      <h3>Funktionaalinen komponentti</h3>  
      <input
        type="text"
          onChange= {handleNameInput}
          value={name}
          placeholder="Nimesi"
      />  
      <p>{name}</p>
  
    </div>
  );
};

export default Funk1;