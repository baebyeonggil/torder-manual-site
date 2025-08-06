const main = document.querySelector('main');
const zoomButtons = document.querySelectorAll('.footer-btn[data-zoom]');
const themeButton = document.querySelector('.footer-btn[data-theme]');

// 초기 설정
const savedZoom = localStorage.getItem('zoom') || '1.0';
const savedTheme = localStorage.getItem('theme') || 'light';

applyZoom(savedZoom);
applyTheme(savedTheme);
highlightZoomButton(savedZoom);
highlightThemeButton(savedTheme);

// 확대 버튼
zoomButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const zoom = btn.getAttribute('data-zoom');
    localStorage.setItem('zoom', zoom);
    applyZoom(zoom);
    highlightZoomButton(zoom);
  });
});

function applyZoom(scale) {
  main.style.transform = `scale(${scale})`;
  main.style.transformOrigin = 'top left';
}

function highlightZoomButton(scale) {
  zoomButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-zoom') === scale);
  });
}

// 대비 버튼
themeButton.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
  highlightThemeButton(next);
});

function applyTheme(theme) {
  document.body.style.backgroundColor = theme === 'dark' ? '#333333' : '#e6e6e6';
  document.body.style.color = theme === 'dark' ? '#ffffff' : '#000000';
}

function highlightThemeButton(theme) {
  themeButton.classList.toggle('active', theme === 'dark');
}
