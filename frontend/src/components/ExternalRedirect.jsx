import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const externalUrls = {
  instagram: 'https://www.instagram.com/csgidurg/',
  facebook: 'https://www.facebook.com/csgidurg.in',
  youtube: 'https://www.youtube.com/channel/UCp_whb0YhFgOSYofgSVQjuA/videos',
  linkedin: 'https://www.linkedin.com/in/chhatrapati-shivaji-group-of-institutions-durg-9909173b/',
  twitter: 'https://x.com/DurgCsit',
  maps: 'https://www.google.com/maps/place/CSIT+Durg/@21.1482141,81.2611754,863m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a293bf98e611daf:0x9aeb86912d1db8e7!8m2!3d21.1482141!4d81.2611754!16s%2Fm%2F076xq1f?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D',
  zager: 'https://www.zager.in/',
};

const emailAddresses = {
  registrar: 'registrar@csitdurg.in',
  info: 'info@csitdurg.in',
};

const ExternalRedirect = () => {
  const { type, param } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'email' && emailAddresses[param]) {
      window.location.href = `mailto:${emailAddresses[param]}`;
    } else if (type === 'phone' && param) {
      window.location.href = `tel:+91${param}`;
    } else if (externalUrls[type]) {
      window.location.href = externalUrls[type];
    } else {
      // If no matching URL, redirect to home
      navigate('/');
    }
  }, [type, param, navigate]);

  return null;
};

export default ExternalRedirect; 