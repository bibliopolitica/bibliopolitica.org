const setColorMode = (mode) => {
  // Mode was given
  if (mode) {
    // Update data-* attr on html
    document.documentElement.setAttribute('data-force-color-mode', mode);
    // Persist in local storage
    window.localStorage.setItem('color-mode', mode);
    // Make sure the checkbox is up-to-date
    document.querySelector('#toggle-darkmode').checked = (mode === 'dark');
  }
  
  // No mode given (e.g. reset)
  else {
    // Remove data-* attr from html
    document.documentElement.removeAttribute('data-force-color-mode');
    // Remove entry from local storage
    window.localStorage.removeItem('color-mode');
    // Make sure the checkbox is up-to-date, matching the system preferences
    document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
  setColorMode(e.target.checked ? 'dark' : 'light');
});

// Keep an eye out for System Light/Dark Mode Changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addListener(() => {
  // Ignore change if there's an override set
  if (document.documentElement.getAttribute('data-force-color-mode')) {
    return;
  }

  // Make sure the checkbox is up-to-date
  document.querySelector('#toggle-darkmode').checked = mediaQuery.matches;
});
// Check if there's any override. If so, let the markup know by setting an attribute on the <html> element
const colorModeOverride = window.localStorage.getItem('color-mode');
const hasColorModeOverride = typeof colorModeOverride === 'string';
if (hasColorModeOverride) {
  document.documentElement.setAttribute('data-force-color-mode', colorModeOverride);
}
// Check the dark-mode checkbox if
// - The override is set to dark
// - No override is set but the system prefers dark mode
if ((colorModeOverride == 'dark') || (!hasColorModeOverride && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('#toggle-darkmode').checked = true;
}