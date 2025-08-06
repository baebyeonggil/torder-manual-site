const main = document.querySelector('main');
const zoomButtons = document.querySelectorAll('.footer-btn[data-zoom]');
const themeButton = document.querySelector('.footer-btn[data-theme]');

// 초기 상태 적용
const zoom = localStorage.getItem('zoom') || '1.0';
const theme = localStorage.getItem('theme') || 'light';
applyZoom(zoom);
applyTheme(theme);
updateZoomUI(zoom);
updateThemeUI(theme);

// 확대 버튼 이벤트
zoomButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedZoom = btn.getAttribute('data-zoom');
    localStorage.setItem('zoom', selectedZoom);
    applyZoom(selectedZoom);
    updateZoomUI(selectedZoom);
  });
});

function applyZoom(scale) {
  main.style.transform = `scale(${scale})`;
  main.style.transformOrigin = 'top left';
}

function updateZoomUI(scale) {
  zoomButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-zoom') === scale);
  });
}

// 테마 버튼 이벤트
themeButton.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
  updateThemeUI(next);
});

function applyTheme(theme) {
  document.body.style.backgroundColor = theme === 'dark' ? '#333333' : '#ffffff';
  document.body.style.color = theme === 'dark' ? '#ffffff' : '#000000';
}

function updateThemeUI(theme) {
  themeButton.classList.toggle('active', theme === 'dark');
}
