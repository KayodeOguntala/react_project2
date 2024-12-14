import React, { useState } from 'react';
import Grid from './Grid';
import './App.css';

function App() {
  // State for the number of rows and columns
  const [numRows, setNumRows] = useState(2);  
  const [numCols, setNumCols] = useState(4);  

  // Handle changes for rows and columns input
  const handleRowChange = (event) => {
    setNumRows(Number(event.target.value));
  };

  const handleColChange = (event) => {
    setNumCols(Number(event.target.value));
  };

  return (
    <div>
      <h1>Dynamic Grid</h1>
      
      {/* Input for number of rows */}
      <div>
        <label htmlFor="rows">Rows:</label>
        <input 
          id="rows" 
          type="number" 
          value={numRows} 
          onChange={handleRowChange} 
          min="1" 
          max="9"
        />
      </div>

      {/* Input for number of columns */}
      <div>
        <label htmlFor="cols">Columns:</label>
        <input 
          id="cols" 
          type="number" 
          value={numCols} 
          onChange={handleColChange} 
          min="1" 
          max="9"
        />
      </div>
      
      <Grid numRows={numRows} numCols={numCols} />
    </div>
  );
}

export default App;
