document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer class="footer-accessibility">
      <div class="tool">
        <div class="tool-group">
          <strong class="footer-label">글자크기</strong>

          <label class="tool-button">
            <input type="radio" name="scale" value="1" checked>
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

  document.body.insertAdjacentHTML("beforeend", footerHTML);

 
  const radios = document.querySelectorAll('input[name="scale"]');
  const root = document.documentElement;
  const savedScale = localStorage.getItem('scale') || '1';
  root.style.setProperty('--content-scale', savedScale);
  radios.forEach(radio => {
    if (radio.value === savedScale) radio.checked = true;
    radio.addEventListener('change', () => {
      root.style.setProperty('--content-scale', radio.value);
      localStorage.setItem('scale', radio.value);
    });
  });


  const themeCheckbox = document.getElementById('theme');
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    themeCheckbox.checked = true;
    document.body.classList.add('dark-mode');
  }

  themeCheckbox.addEventListener("change", () => {
    document.body.classList.toggle('dark-mode', themeCheckbox.checked);
    localStorage.setItem('theme', themeCheckbox.checked ? 'dark' : 'light');
  });
});
