export default width => {
  if (width <= 768) {
    return {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      device: "mobile"
    };
  } else if (width <= 1024) {
    return {
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      device: "tablet"
    };
  } else {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      device: "desktop"
    };
  }
};
