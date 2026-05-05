import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initFacebookPixel, trackPageView } from '../utils/fbPixel';

const PixelTracker = () => {
  const location = useLocation();

  // Initialize the pixel exactly once when the app loads
  useEffect(() => {
    initFacebookPixel();
  }, []);

  // Track page views every time the user navigates to a new route
  useEffect(() => {
    trackPageView();
  }, [location]);

  // This component doesn't render any visible UI
  return null;
};

export default PixelTracker;