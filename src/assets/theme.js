// Theme toggle functionality
(function() {
  'use strict';

  // Get theme from localStorage or system preference
  function getTheme() {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    } catch (e) {
      return 'light';
    }
  }

  // Set theme on document and save to localStorage
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // localStorage not available
    }
    updateToggleButton(theme);
  }

  // Update the toggle button icon and aria-label
  function updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-toggle-icon');
    
    if (button && icon) {
      if (theme === 'dark') {
        icon.textContent = '☀️';
        button.setAttribute('aria-label', 'Switch to light mode');
        button.setAttribute('title', 'Switch to light mode');
      } else {
        icon.textContent = '🌙';
        button.setAttribute('aria-label', 'Switch to dark mode');
        button.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  // Initialize theme on page load
  function init() {
    const currentTheme = getTheme();
    setTheme(currentTheme);

    // Add click handler to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.dataset.theme || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
