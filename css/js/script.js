const main = document.querySelector('main');
const zoomButtons = document.querySelectorAll('.footer-btn[data-zoom]');
const themeButton = document.querySelector('.footer-btn[data-theme]');

// 초기 상태 불러오기
const zoom = localStorage.getItem('zoom') || '1.0';
const theme = localStorage.getItem('theme') || 'light';

applyZoom(zoom);
applyTheme(theme);
highlightZoomButton(zoom);
highlightThemeButton(theme);

// 확대 버튼 클릭
zoomButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedZoom = btn.getAttribute('data-zoom');
    localStorage.setItem('zoom', selectedZoom);
    applyZoom(selectedZoom);
    highlightZoomButton(selectedZoom);
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

// 대비 버튼 클릭
themeButton.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
  highlightThemeButton(next);
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

function highlightThemeButton(theme) {
  themeButton.classList.toggle('active', theme === 'dark');
}
