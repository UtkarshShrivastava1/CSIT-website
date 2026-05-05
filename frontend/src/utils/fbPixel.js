const PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || '849793067190793';

export const initFacebookPixel = () => {
  // Prevent duplicate initialization
  if (window.fbq) return;
  
  console.log('✅ Facebook Pixel Initializing...');
  
  // Facebook Pixel Base Code
  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', PIXEL_ID);
  console.log(`✅ Facebook Pixel Initialized with ID: ${PIXEL_ID}`);
};

export const trackPageView = () => {
  if (window.fbq) {
    console.log('📈 Tracking Event: PageView');
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (eventName, data = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
};

export const trackLead = (data = {}) => {
  trackEvent('Lead', data);
};

export const trackViewContent = (data = {}) => {
  trackEvent('ViewContent', data);
};

export const trackCompleteRegistration = (data = {}) => {
  trackEvent('CompleteRegistration', data);
};