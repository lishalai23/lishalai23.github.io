/* ============================================================
   全站导航交互：三横菜单按钮 <-> 全屏衬线菜单
   · 点击三横：展开全屏菜单，三横变 X
   · 再点 X / 按 Esc / 点击菜单项：关闭菜单
   · 自动标记当前所在页的菜单项（无需每页手动改）
   ============================================================ */

(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  // 展开 / 收起菜单
  function setMenu(open) {
    toggle.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  }

  // 点击三横 / X
  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("is-open"));
  });

  // 点击任意菜单项后关闭（整页跳转，此处为兜底）
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Esc 关闭
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // 自动高亮当前页：对比当前文件名与菜单链接
  const current = window.location.pathname.split("/").pop() || "index.html";
  menu.querySelectorAll("a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("is-active");
    }
  });
})();
