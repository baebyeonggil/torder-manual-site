document.addEventListener('DOMContentLoaded', () => {

  const radios = document.querySelectorAll('input[name="scale"]');
  const root = document.documentElement;
  const savedScale = localStorage.getItem('fontScale') || '1';
  root.style.setProperty('--content-scale', savedScale);
  const selectedRadio = document.querySelector(`input[name="scale"][value="${savedScale}"]`);
  if (selectedRadio) selectedRadio.checked = true;

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const scale = radio.value;
      root.style.setProperty('--content-scale', scale);
      localStorage.setItem('fontScale', scale);
    });
  });


  const themeToggle = document.getElementById('theme');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
