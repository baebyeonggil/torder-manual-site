document.addEventListener('DOMContentLoaded', () => {
  const segments = location.pathname.split('/').filter(Boolean);
  const isSubPage = segments.length > 1;
  const pathPrefix = isSubPage ? '../' : '';

  let header = document.querySelector('header.header');
  if (!header) {
    header = document.createElement('header');
    header.className = 'header';
    document.body.prepend(header);
  }

  header.innerHTML = `
    <div class="header-left" style="display:flex; align-items:center; gap:10px;">
      <img src="${pathPrefix}img/symbol.svg" alt="로고" class="header-symbol" />
      <h1 class="header-title">티오더 사장님 메뉴얼</h1>
    </div>
    ${isSubPage ? `
      <div class="header-right">
        <a href="${pathPrefix}index.html" class="tool-button header-home-link">
          처음으로
        </a>
      </div>
    ` : ''}
  `;
});
