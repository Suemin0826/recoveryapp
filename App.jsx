import React, { useState, useEffect } from 'react';
import RecoveryMode from './RecoveryMode';
import PanicHistory from './PanicHistory';
import './App.css';

const calmingPhrases = [
  "Take a deep breath…",
  "You’re doing great.",
  "Let your thoughts float away…",
  "You’re safe here.",
  "Let the calm in.",
  "Close your eyes for a moment…"
];

function App() {
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);
  const [phrase, setPhrase] = useState('');
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('default');
  const [timer, setTimer] = useState(60); // Timer state

  useEffect(() => {
    if (isRecoveryMode) {
      const random = Math.floor(Math.random() * calmingPhrases.length);
      setPhrase(calmingPhrases[random]);

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsRecoveryMode(false);
          }
          return prev - 1;
        });
      }, 1000); // Countdown interval for 1 second
    }
  }, [isRecoveryMode]);

  const startRecovery = () => {
    setIsRecoveryMode(true);
    setTimer(60); // Reset timer on start
  };

  const logPanic = () => {
    const now = new Date();
    setHistory((prev) => [
      ...prev,
      `${now.toLocaleString()} Panic button pressed (Total: ${prev.length + 1})`
    ]);
    startRecovery(); // Start recovery mode when panic button is pressed
  };

  const toggleTheme = () => {
    const next = theme === 'default' ? 'alternate' : 'default';
    setTheme(next);
  };

  return (
    <div className={`app ${theme}`}>
      {isRecoveryMode ? (
        <RecoveryMode phrase={phrase} timer={timer} />
      ) : (
        <div className="home">
          <h1>Welcome, Commander</h1>
          <button onClick={startRecovery}>START RECOVERY</button>
          <button onClick={logPanic}>PANIC BUTTON</button>
          <button onClick={toggleTheme}>Switch Theme</button>
          <PanicHistory history={history} />
        </div>
      )}
    </div>
  );
}

export default App;
