const body = document.body;

// 확대 상태
if (localStorage.getItem("zoom") === "large") {
  body.style.fontSize = "20px";
}

// 다크모드 상태
if (localStorage.getItem("theme") === "dark") {
  body.style.backgroundColor = "#333333";
  body.style.color = "#ffffff";
}

// 확대 버튼
document.getElementById("zoomToggle").addEventListener("click", () => {
  if (body.style.fontSize === "20px") {
    body.style.fontSize = "16px";
    localStorage.setItem("zoom", "normal");
  } else {
    body.style.fontSize = "20px";
    localStorage.setItem("zoom", "large");
  }
});

// 다크모드 버튼
document.getElementById("themeToggle").addEventListener("click", () => {
  const isDark = body.style.backgroundColor === "rgb(51, 51, 51)";
  if (isDark) {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    localStorage.setItem("theme", "light");
  } else {
    body.style.backgroundColor = "#333333";
    body.style.color = "#ffffff";
    localStorage.setItem("theme", "dark");
  }
});
