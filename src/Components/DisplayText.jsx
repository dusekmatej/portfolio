import { useState, useEffect } from 'react'
import '../App.css'

const DisplayText = ( { text, interval = 500 } ) => {
  const [displayed, setDisplayed] = useState('');

    useEffect(() => {
      if (!text) return;
      setDisplayed(text[0] || '')
      let currentIndex = 0;
      const timer = setInterval(() => {
        setDisplayed(prev => prev + (text[currentIndex] || ''));
          currentIndex++;
          if (currentIndex >= text.length){
            clearInterval(timer);
            return;
          }
      }, interval);
      
      return () => clearInterval(timer);
    
    }, [text, interval]);
  return <span className="text-white text-base md:text-1xl font-bold drop-shadow-lg z-50">{displayed}</span>;
  }

export default DisplayText;