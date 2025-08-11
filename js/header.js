document.addEventListener('DOMContentLoaded', () => {
  // 이 스크립트 파일의 절대 URL에서 사이트 BASE 경로 추출
  const thisScript = Array.from(document.getElementsByTagName('script'))
    .find(s => s.src && s.src.includes('/js/header.js'));
  // 예) https://username.github.io/repo/js/header.js → base = https://username.github.io/repo/
  const base = thisScript ? thisScript.src.replace(/js\/header\.js.*$/, '') : '/';

  // 현재 URL에서 base를 제거한 "사이트 기준 상대경로"
  const rel = location.href.replace(base, '');
  // 홈 판단: "", "index.html", 또는 폴더 루트
  const isHome = rel === '' || rel === 'index.html' || rel.match(/^([^/?#]+\/)?$/);

  // 헤더 준비(없으면 생성)
  let header = document.querySelector('header.header');
  if (!header) {
    header = document.createElement('header');
    header.className = 'header';
    document.body.prepend(header);
  }

  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';
  header.style.padding = '0 16px';
  header.style.height = '60px';
  header.style.boxSizing = 'border-box';

  header.innerHTML = `
    <div class="header-left" style="display:flex; align-items:center; gap:10px;">
      <img src="${base}img/symbol.svg" alt="로고" class="header-symbol" />
      <h1 class="header-title">티오더 사장님 메뉴얼</h1>
    </div>
    ${!isHome ? `
      <a href="${base}index.html" class="tool-button header-home-link">처음으로</a>
    ` : ''}
  `;
});
