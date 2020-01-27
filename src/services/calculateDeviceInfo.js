export default width => {
  if (width <= 768) {
    return {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      device: "mobile"
    };
  }

  if (width <= 1024) {
    return {
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      device: "tablet"
    };
  }

  return {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    device: "desktop"
  };
};
