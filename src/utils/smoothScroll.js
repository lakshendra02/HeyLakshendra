export const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset to account for the fixed Navbar height (approx 80px)
      behavior: "smooth",
    });
  }
};
