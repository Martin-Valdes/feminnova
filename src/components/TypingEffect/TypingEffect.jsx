import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, speed }) => {
  const [displayWords, setDisplayWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayWords(prevWords => [...prevWords, words[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [words, speed, currentIndex]);

  return (
    <div>
      {displayWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
};

export default TypingEffect;