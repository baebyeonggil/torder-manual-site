// ==== 푸터 HTML ====
const footerHTML = `
<footer class="footer-accessibility">
  <div class="tool-group">
    <strong>글자크기</strong>
    <span class="tool-button">
      <input type="radio" id="scale-medium" name="scale" value="1" checked>
      <label for="scale-medium">보통</label>
    </span>
    <span class="tool-button">
      <input type="radio" id="scale-large" name="scale" value="1.25">
      <label for="scale-large">크게</label>
    </span>
    <span class="tool-button">
      <input type="radio" id="scale-huge" name="scale" value="1.5">
      <label for="scale-huge">더 크게</label>
    </span>
  </div>
  <div class="tool-group">
    <span class="tool-button">
      <input type="checkbox" id="theme">
      <label for="theme">대비</label>
    </span>
  </div>
</footer>
`;

// ==== 기능 ====
function initFooter() {
  // 스케일
  document.querySelectorAll('input[name="scale"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const v = e.target.value;
      document.documentElement.style.setProperty('--content-scale', v);
      localStorage.setItem('scale', v);
    });
  });

  // 다크모드
  const themeEl = document.getElementById('theme');
  if (themeEl) {
    themeEl.addEventListener('change', (e) => {
      const on = e.target.checked;
      document.documentElement.classList.toggle('dark-mode', on);
      localStorage.setItem('theme', on ? 'dark' : 'light');
    });
  }

  // 복원(시각 동기화)
  const s = localStorage.getItem('scale') || '1';
  const sel = document.querySelector(`input[name="scale"][value="${s}"]`);
  if (sel) sel.checked = true;

  const t = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark-mode', t === 'dark');
  if (themeEl) themeEl.checked = (t === 'dark');
}

// === 페이지 하단 고지 문구 ===
const legalHTML = `
<div class="site-legal">
  본 자료는 (주)티오더의 내부 자료로, 사전 승인을 받지 않은 외부 공유는 제한됩니다.
  본 자료의 무단 공개 또는 외부 유출 시, 관련 법률에 따라 조치가 이루어질 수 있음을 안내드립니다.
</div>`;


// ==== 안전 마운트: 이미 있으면 재사용, 아니면 생성 ====
function mountFooter() {
  // 1) 푸터 없으면 생성
  let footerEl = document.querySelector('.footer-accessibility');
  if (!footerEl) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    footerEl = document.querySelector('.footer-accessibility');
  }

  // 2) 고지 문구가 없으면 푸터 '바로 위'에 삽입
  if (!document.querySelector('.site-legal') && footerEl) {
    footerEl.insertAdjacentHTML('beforebegin', legalHTML);
  }

  // 3) 기능 장착
  initFooter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountFooter);
} else {
  mountFooter();
}
