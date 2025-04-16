import React from 'react';
import './RecoveryMode.css';
import gifSrc from './NewPiskel2.gif';

const RecoveryMode = ({ phrase, timer }) => {
  return (
    <div className="recovery-mode">
      <img src={gifSrc} alt="soothing gif" className="gif" />
      <p className="phrase">{phrase}</p>
      <p className="timer">⏳ {timer} seconds remaining</p>
    </div>
  );
};

export default RecoveryMode;
