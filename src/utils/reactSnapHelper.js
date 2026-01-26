/**
 * Utility functions for react-snap prerendering
 */

// Check if we're running in react-snap's headless browser
export const isReactSnap = () => {
  return navigator.userAgent === 'ReactSnap';
};

// Signal to react-snap that the page is ready
export const signalPageReady = () => {
  if (isReactSnap()) {
    // Create a marker element that react-snap can look for
    const marker = document.createElement('div');
    marker.id = 'react-snap-ready';
    marker.style.display = 'none';
    document.body.appendChild(marker);
  }
};

// Use this in useEffect after data loads
export const useReactSnapReady = (isDataLoaded) => {
  if (typeof window !== 'undefined' && isDataLoaded && isReactSnap()) {
    signalPageReady();
  }
};
