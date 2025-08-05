// common.js
// 확대 및 대비 설정 불러오기
const savedZoom = localStorage.getItem('zoom');
if (savedZoom) {
  document.documentElement.style.setProperty('--zoom-scale', savedZoom);
}

const contrast = localStorage.getItem('contrast');
if (contrast === 'high') {
  document.documentElement.style.setProperty('--bg-color', '#000');
  document.documentElement.style.setProperty('--text-color', '#FFF');
  document.documentElement.style.setProperty('--button-text-color', '#000');
} else {
  document.documentElement.style.setProperty('--bg-color', '#246FF4');
  document.documentElement.style.setProperty('--text-color', '#FFF');
  document.documentElement.style.setProperty('--button-text-color', '#246FF4');
}

// 확대 및 대비 조절 함수
function setZoom(scale) {
  document.documentElement.style.setProperty('--zoom-scale', scale);
  localStorage.setItem('zoom', scale);
}

function toggleContrast() {
  const isLight = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim() === '#246FF4';
  if (isLight) {
    document.documentElement.style.setProperty('--bg-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#FFF');
    document.documentElement.style.setProperty('--button-text-color', '#000');
    localStorage.setItem('contrast', 'high');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#246FF4');
    document.documentElement.style.setProperty('--text-color', '#FFF');
    document.documentElement.style.setProperty('--button-text-color', '#246FF4');
    localStorage.setItem('contrast', 'normal');
  }
}

// 하단 고정 UI 삽입
document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <div class="footer-fixed">
      <div class="footer-label">글자 크기</div>
      <div class="footer-buttons">
        <button class="text-size-button" onclick="setZoom(1)">보통</button>
        <button class="text-size-button" onclick="setZoom(1.2)">크게</button>
        <button class="text-size-button" onclick="setZoom(1.4)">더 크게</button>
        <button class="text-size-button" onclick="toggleContrast()">대비</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});