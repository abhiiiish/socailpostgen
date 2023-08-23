import React, { useState, useEffect } from 'react';
import './Body.css';

export default function Body() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const spans = document.querySelectorAll('span');
      let currentIndex = 0;

      spans.forEach((span, index) => {
        if (span.hasAttribute('data-show')) {
          span.removeAttribute('data-show');
          span.setAttribute('data-up', '');
          currentIndex = index;
        } else if (span.hasAttribute('data-up')) {
          span.removeAttribute('data-up');
        }
      });

      const nextIndex = (currentIndex + 1) % spans.length;
      spans[nextIndex].setAttribute('data-show', '');
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="w-100"></div>
      <div className="text my-5 bg-dark">
        <h2>
          Digital Vyapar
          <div className="mask">
            <span data-show>Bada Vyapar.</span>
            <span>Bada Vyapar.</span>
            <span>Bada Vyapar.</span>
            <span>Bada Vyapar.</span>
          </div>
        </h2>
      </div>
    </>
  );
}
