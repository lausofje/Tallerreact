import React, { useState } from 'react';
 function Contador() {
    const [count, setCount] = useState(0);
    return (
     <div>
        <p>le diste click {count} veces</p>
       <button onClick={() => setCount(count + 1)}>
      Oprime
       </button>
     </div>
  );
 }
 export default Contador;