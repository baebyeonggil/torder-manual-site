const main = document.querySelector('main');
const zoomButtons = document.querySelectorAll('.mode-btn[data-zoom]');
const themeButton = document.querySelector('.mode-btn[data-theme]');

// 초기 상태 적용
applyZoom(localStorage.getItem('zoom') || '1.0');
applyTheme(localStorage.getItem('theme') || 'light');
updateZoomActiveButton(localStorage.getItem('zoom') || '1.0');
updateThemeActiveButton(localStorage.getItem('theme') || 'light');

// 확대 기능
zoomButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const zoom = btn.getAttribute('data-zoom');
    applyZoom(zoom);
    localStorage.setItem('zoom', zoom);
    updateZoomActiveButton(zoom);
  });
});

function applyZoom(scale) {
  main.style.transform = `scale(${scale})`;
  main.style.transformOrigin = 'top left';
}

function updateZoomActiveButton(scale) {
  zoomButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-zoom') === scale);
  });
}

// 다크모드 기능
themeButton.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
  updateThemeActiveButton(nextTheme);
});

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#333333';
    document.body.style.color = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
  }
}

function updateThemeActiveButton(theme) {
  themeButton.classList.toggle('active', theme === 'dark');
}
