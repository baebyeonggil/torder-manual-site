document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer class="footer-accessibility">
      <div class="tool">
        <div class="tool-group">
          <strong class="footer-label">글자크기</strong>

          <label class="tool-button">
            <input type="radio" name="scale" value="1">
            보통
          </label>

          <label class="tool-button">
            <input type="radio" name="scale" value="1.25">
            크게
          </label>

          <label class="tool-button">
            <input type="radio" name="scale" value="1.5">
            더 크게
          </label>
        </div>

        <div class="tool-group">
          <label class="tool-button">
            <input type="checkbox" id="theme">
            대비
          </label>
        </div>
      </div>
    </footer>
  `;

  // 푸터 삽입
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  /* =====================
     글자 크기 스케일 기능
     ===================== */
  const root = document.documentElement;
  const radios = document.querySelectorAll('input[name="scale"]');

  // 저장된 값 불러오기 (기본값: 1)
  const savedScale = localStorage.getItem('scale') || '1';
  root.style.setProperty('--content-scale', savedScale);

  // 라디오 체크 상태 반영
  radios.forEach(radio => {
    radio.checked = (radio.value === savedScale);
    radio.addEventListener('change', () => {
      root.style.setProperty('--content-scale', radio.value);
      localStorage.setItem('scale', radio.value);
    });
  });

  /* =====================
     다크모드 토글 기능
     ===================== */
  const themeCheckbox = document.getElementById('theme');
  const savedTheme = localStorage.getItem('theme') || 'light';

  // 저장된 테마 적용
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeCheckbox.checked = (savedTheme === 'dark');

  // 변경 시 저장
  themeCheckbox.addEventListener("change", () => {
    const isDark = themeCheckbox.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
