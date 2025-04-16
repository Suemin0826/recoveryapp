import React from 'react';

const PanicHistory = ({ history }) => {
  return (
    <div className="panic-history">
      <h2>Panic History Log</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default PanicHistory;
