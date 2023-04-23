import React, { useState, useEffect } from 'react';

const TextSlider = () => {
  const texts = [
    'more engagement',
    'more followers',
    'more traffic',
    'more reach',
    'more shares per post'
  ];
  
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(currentIndex => (currentIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div style={{ position: 'relative', height: '50px' }}>
      {texts.map((text, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: index === currentTextIndex ? 'block' : 'none',
            animation: index === currentTextIndex ? 'fade-slide-in 1s forwards' : ''
          }}
        >
          <p style={{ margin: '0' ,fontSize: text===texts[4]?40:50}}>{text}</p>
        </div>
      ))}
     <style>{`
        @keyframes fade-slide-in {
          from {
            opacity: 0;
            transform: translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TextSlider;
