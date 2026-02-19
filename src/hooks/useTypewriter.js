import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;

    const startTyping = () => {
      setIsTyping(true);
      let i = 0;

      const typeChar = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          timeoutId = setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
        }
      };

      typeChar();
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay]);

  return { displayText, isTyping };
};
