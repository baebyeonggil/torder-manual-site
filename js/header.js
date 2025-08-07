document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <img src="img/symbol.svg" alt="로고" class="header-symbol" />
    <h1 class="header-title">티오더 사장님 메뉴얼</h1>
  `;
  document.body.prepend(header);
});
