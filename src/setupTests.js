import "@testing-library/jest-dom";

// jsdom lacks matchMedia; the app degrades gracefully without it,
// but stubbing keeps the render path identical to a real browser.
window.matchMedia =
  window.matchMedia ||
  ((query) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }));
