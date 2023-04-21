const body = document.body;
const toggleButton = document.getElementById('theme-toggle');

const setTheme = (theme) => {
  body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
};

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  const currentTheme = body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(currentTheme);
});

