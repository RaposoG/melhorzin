export const getDeviceType = () => {
  const isMac = /(Mac)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  const deviceType = isMac ? 'mac' : isMobile ? 'mobile' : undefined;

  return deviceType || 'windows';
};
