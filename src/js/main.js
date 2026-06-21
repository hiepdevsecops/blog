// Menu mobile
const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
if (burger && menu) {
  burger.addEventListener("click", () => menu.classList.toggle("open"));
}

// Chế độ tối (dark mode) — nhớ lựa chọn của người đọc
(function () {
  const KEY = "theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  if (saved) root.setAttribute("data-theme", saved);

  const btn = document.querySelector(".theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", cur);
      localStorage.setItem(KEY, cur);
    });
  }
})();

// Mục lục tự động cho bài viết dài
(function () {
  const tocBox = document.querySelector(".toc-list");
  const content = document.querySelector(".content");
  if (!tocBox || !content) return;
  const heads = content.querySelectorAll("h2, h3");
  if (heads.length < 3) {
    const toc = document.querySelector(".toc");
    if (toc) toc.style.display = "none";
    return;
  }
  heads.forEach((h, i) => {
    const id = "muc-" + i;
    h.id = id;
    const a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = h.textContent;
    a.className = h.tagName.toLowerCase();
    tocBox.appendChild(a);
  });
})();
