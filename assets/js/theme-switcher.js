document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleButton = document.getElementById('theme-toggle');

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    body.classList.toggle('dark', savedTheme === 'dark');
  }
});
