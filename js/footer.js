// footer.js
document.addEventListener("DOMContentLoaded", () => {
  injectFooter();
  applyScaleFromStorage();   // 1) 최초 적용
  wireScaleRadios();         // 2) 이벤트 바인딩
  applyThemeFromStorage();   // 3) 테마 적용
});

// 뒤로가기/앞으로가기/같은 페이지 재진입 시 (bfcache 복원 포함)
window.addEventListener("pageshow", (event) => {
  // bfcache 복원 시에도 강제 재적용
  applyScaleFromStorage();
  applyThemeFromStorage();
});


// ===== 구현부 =====
const STORAGE_KEY_SCALE = "scale";
const STORAGE_KEY_THEME = "theme";

function injectFooter() {
  const footerHTML = `
    <footer class="footer-accessibility">
      <div class="tool">
        <div class="tool-group">
          <strong class="footer-label">글자크기</strong>
          <label class="tool-button"><input type="radio" name="scale" value="1">보통</label>
          <label class="tool-button"><input type="radio" name="scale" value="1.25">크게</label>
          <label class="tool-button"><input type="radio" name="scale" value="1.5">더 크게</label>
        </div>
        <div class="tool-group">
          <label class="tool-button"><input type="checkbox" id="theme">대비</label>
        </div>
      </div>
    </footer>
  `;
  // 이미 있으면 중복 삽입 방지
  if (!document.querySelector(".footer-accessibility")) {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
}


function applyScaleFromStorage() {
  const root = document.documentElement;
  const saved = localStorage.getItem(STORAGE_KEY_SCALE) || "1";
  root.style.setProperty("--content-scale", saved);

  // 라디오 UI 동기화
  document.querySelectorAll('input[name="scale"]').forEach(r => {
    r.checked = (r.value === saved);
  });
}

function wireScaleRadios() {
  document.querySelectorAll('input[name="scale"]').forEach(r => {
    r.addEventListener("change", () => {
      const v = r.value;
      document.documentElement.style.setProperty("--content-scale", v);
      localStorage.setItem(STORAGE_KEY_SCALE, v);
    });
  });
}

function applyThemeFromStorage() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";
  const toggle = document.getElementById("theme");
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
  if (toggle) {
    toggle.checked = (savedTheme === "dark");
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem(STORAGE_KEY_THEME, isDark ? "dark" : "light");
    });
  }
}
