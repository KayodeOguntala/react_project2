import React from 'react';
import { range } from './utils';

const gridStyles = {
  display: 'flex',
  flexDirection: 'column', 
  gap: '5px', 
};

const rowStyles = {
  display: 'flex', 
  justifyContent: 'center', 
  gap: '5px', 
};

const cellStyles = {
  width: '100px', 
  aspectRatio: '1', 
  border: '1px solid', 
  backgroundColor: '#f0f0f0', 
};

function Grid({ numRows, numCols }) {
  return (
    <div style={gridStyles} className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={`row-${rowIndex}`} className="row" style={rowStyles}>
          {range(numCols).map((colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className="cell"
              style={cellStyles}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
