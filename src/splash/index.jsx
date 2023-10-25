import React, { useEffect } from 'react';
import './style.css';

const SplashScreen = () => {
  useEffect(() => {
    const createRaindrops = () => {
      const raindropContainer = document.querySelector('.raindrop-container');
      const numRaindrops = 50;

      for (let i = 0; i < numRaindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${1 + Math.random() * 2}s`;
        raindropContainer.appendChild(raindrop);
      }
    };

    createRaindrops();

    const timeout = setTimeout(() => {
      window.location.href = '/home';
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="splash-screen">
      <div className="raindrop-container"></div>
      <div className="sun"></div>
      <h1 className="title">ClimateSasa</h1>
      <div>
      <p className="description">
    ClimateSasa is an app that provides you with accurate weather forecasts and simplifies your planning process. Stay informed and make the most of your day with our user-friendly interface and reliable data.
  </p></div>
      <div className="catchy-words">
        <div className="flexed-rect">
          <p className="transparent-rectangle">Discover the forecast, unlock your day!</p>
          <p className="transparent-rectangle">Plan ahead, weather-made simple!</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;