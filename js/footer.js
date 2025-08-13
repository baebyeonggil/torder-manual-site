(() => {
  'use strict';

  // ==== 푸터 HTML ====
  const footerHTML = `
  <footer class="footer-wrapper">
    <div class="site-legal">
      본 자료는 (주)티오더의 내부 자료로, 사전 승인을 받지 않은 외부 공유는 제한됩니다.
      본 자료의 무단 공개 또는 외부 유출 시, 관련 법률에 따라 조치가 이루어질 수 있음을 안내드립니다.
    </div>
    <div class="footer-accessibility">
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
    </div>
  </footer>
  `;

  function initFooter(footerEl) {
    if (!footerEl || footerEl.dataset.bound === '1') return;

    // 저장값 복원
    const savedScale = localStorage.getItem('scale') || '1';
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.style.setProperty('--content-scale', savedScale);
    document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');

    const sel = footerEl.querySelector(`input[name="scale"][value="${savedScale}"]`);
    if (sel) sel.checked = true;
    const themeEl = footerEl.querySelector('#theme');
    if (themeEl) themeEl.checked = (savedTheme === 'dark');

    // 이벤트 바인딩
    footerEl.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'scale') {
        const v = t.value;
        document.documentElement.style.setProperty('--content-scale', v);
        localStorage.setItem('scale', v);
      }
      if (t.id === 'theme') {
        const on = t.checked;
        document.documentElement.classList.toggle('dark-mode', on);
        localStorage.setItem('theme', on ? 'dark' : 'light');
      }
    }, { passive: true });

    footerEl.dataset.bound = '1';
  }

  function mountFooter() {
    let footerEl = document.querySelector('.footer-wrapper');
    if (!footerEl) {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
      footerEl = document.querySelector('.footer-wrapper');
    }
    initFooter(footerEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFooter);
  } else {
    mountFooter();
  }

})();

