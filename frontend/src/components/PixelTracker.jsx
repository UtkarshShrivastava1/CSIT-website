// src/components/PixelTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initFacebookPixel, trackPageView } from '../utils/fbPixel';

const PixelTracker = () => {
  const location = useLocation();

  // Initialize the pixel on the first load of the application
  useEffect(() => {
    // Optional: You can wrap this in an environment check if you only want it running in production
    // if (process.env.NODE_ENV === 'production') { ... }
    initFacebookPixel();
  }, []);

  // Fire PageView every time the route/location changes
  useEffect(() => {
    trackPageView();
  }, [location]);

  return null; // This component does not render anything to the DOM
};

export default PixelTracker;
