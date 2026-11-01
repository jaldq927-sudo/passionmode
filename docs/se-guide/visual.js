/* SE成長ガイド v2 共通スクリプト：アイコン、紙芝居、タブ、クリックで開く図、チェックリスト保存、読了バー */
(function () {
  "use strict";

  /* ---------- icon sprite: <svg class="ic"><use href="#i-db"/></svg> ---------- */
  var P = {
    browser: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6" cy="6.5" r=".6"/><circle cx="8.5" cy="6.5" r=".6"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
    server: '<rect x="4" y="3" width="16" height="7" rx="1.5"/><rect x="4" y="14" width="16" height="7" rx="1.5"/><path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5"/>',
    app: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    db: '<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
    log: '<path d="M6 2h9l4 4v16H6z"/><path d="M15 2v4h4M9 11h7M9 15h7M9 19h4"/>',
    bug: '<rect x="7" y="8" width="10" height="12" rx="5"/><path d="M12 8v12M9 5l1.5 3M15 5l-1.5 3M3 13h4M17 13h4M4 8l3 2M20 8l-3 2M4 19l3-2M20 19l-3-2"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16.5 9.5"/>',
    warn: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5M12 17.5h.01"/>',
    x: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.6-5.2 6.5-5.2s5.5 1.7 6.5 5.2"/><circle cx="17" cy="9" r="2.8"/><path d="M17 14.6c2.3 0 4 1.4 4.6 4.4"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
    folder: '<path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    book: '<path d="M4 5c2.5-1.2 5.5-1.2 8 0v15c-2.5-1.2-5.5-1.2-8 0zM12 5c2.5-1.2 5.5-1.2 8 0v15c-2.5-1.2-5.5-1.2-8 0z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    mountain: '<path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M7.5 10.5l1.5 1.5 1.5-1.5"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    coffee: '<path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11h2a2.5 2.5 0 0 1 0 5h-2M8 3c-1 1.2 1 2 0 3.5M12 3c-1 1.2 1 2 0 3.5"/>',
    leaf: '<path d="M5 19C5 10 10 5 20 4c-.5 10-5.5 15-14 15z"/><path d="M5 19c3-4 6-7 10-9"/>',
    box: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 0-2-2z"/><path d="M14.5 6.5L17 4"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    xml: '<path d="M6 2h9l4 4v16H6z"/><path d="M15 2v4h4M10.5 12l-2 2 2 2M14.5 12l2 2-2 2"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M3 14h18M9 9v11M15 9v11"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    arrow: '<path d="M4 12h15M14 7l5 5-5 5"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    hand: '<path d="M9 11V5a1.5 1.5 0 0 1 3 0v5M12 10V4a1.5 1.5 0 0 1 3 0v6M15 10V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 8-7 8-2.6 0-4-1.3-5.5-3.5L3 13.5a1.6 1.6 0 0 1 2.6-1.8L9 15V8a1.5 1.5 0 0 1 3 0"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 0 1 5 1c0 1.8-2.5 2.2-2.5 4M12 17.5h.01"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" transform="translate(0 -1.5)"/>',
    cloud: '<path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4.3 4.3 0 0 1-.5 8.5z"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
    pen: '<path d="M4 20l1-5L16 4l4 4L9 19z"/><path d="M14 6l4 4"/>',
    list: '<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4.5" cy="6" r=".8"/><circle cx="4.5" cy="12" r=".8"/><circle cx="4.5" cy="18" r=".8"/>',
    route: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7.5"/>',
    stamp: '<path d="M9 13V9a3 3 0 1 1 6 0v4"/><path d="M4 13h16v4H4zM6 20h12"/>',
    yen: '<circle cx="12" cy="12" r="9"/><path d="M8.5 7l3.5 5 3.5-5M12 12v6M9 13h6M9 15.5h6"/>',
    train: '<rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 11h12M9 17l-2 4M15 17l2 4M9.5 14h.01M14.5 14h.01"/>',
    heart: '<path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.3 12 20 12 20z"/>',
    fire: '<path d="M12 21c-4 0-7-2.6-7-6.5 0-3.5 3-5.5 3.5-9.5 2 1.5 3 3.5 3 5 1-1 1.5-2.5 1.5-4 3 2 6 5.5 6 8.5 0 3.9-3 6.5-7 6.5z"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
  };
  var sym = "";
  for (var k in P) sym += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + P[k] + "</symbol>";
  var holder = document.createElement("div");
  holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' + sym + "</svg>";
  document.body.insertBefore(holder.firstChild, document.body.firstChild);

  /* ---------- stepper / 紙芝居 ---------- */
  document.querySelectorAll(".stepper").forEach(function (st) {
    var frames = Array.prototype.slice.call(st.querySelectorAll(":scope > .frame"));
    if (!frames.length) return;
    var i = 0;
    var ctrl = document.createElement("div");
    ctrl.className = "ctrl";
    ctrl.innerHTML = '<button type="button" data-d="-1">← 前へ</button><div><div class="dots"></div><div class="count"></div></div><button type="button" data-d="1">次へ →</button>';
    st.appendChild(ctrl);
    var dots = ctrl.querySelector(".dots"), count = ctrl.querySelector(".count");
    var prev = ctrl.querySelector('[data-d="-1"]'), next = ctrl.querySelector('[data-d="1"]');
    frames.forEach(function () { dots.appendChild(document.createElement("i")); });
    function show(n) {
      i = Math.max(0, Math.min(frames.length - 1, n));
      frames.forEach(function (f, j) { f.hidden = j !== i; dots.children[j].className = j === i ? "on" : ""; });
      count.textContent = (i + 1) + " / " + frames.length;
      prev.disabled = i === 0;
      next.disabled = i === frames.length - 1;
    }
    prev.addEventListener("click", function () { show(i - 1); });
    next.addEventListener("click", function () { show(i + 1); });
    st.tabIndex = 0;
    st.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { show(i + 1); e.preventDefault(); }
      if (e.key === "ArrowLeft") { show(i - 1); e.preventDefault(); }
    });
    show(0);
  });

  /* ---------- tabs: <div class="tabs"><div class="tab" data-label="名前">…</div>…</div> ---------- */
  document.querySelectorAll(".tabs").forEach(function (tb) {
    var tabs = Array.prototype.slice.call(tb.querySelectorAll(":scope > .tab"));
    var list = document.createElement("div");
    list.className = "tablist";
    list.setAttribute("role", "tablist");
    tabs.forEach(function (t, j) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.textContent = t.getAttribute("data-label") || ("タブ" + (j + 1));
      b.addEventListener("click", function () { sel(j); });
      list.appendChild(b);
    });
    tb.insertBefore(list, tb.firstChild);
    function sel(n) {
      tabs.forEach(function (t, j) { t.hidden = j !== n; list.children[j].setAttribute("aria-selected", j === n ? "true" : "false"); });
    }
    sel(0);
  });

  /* ---------- explore: buttons.spot[data-show="id"] → .panel#id ---------- */
  document.querySelectorAll(".explore").forEach(function (ex) {
    var spots = Array.prototype.slice.call(ex.querySelectorAll(".spot"));
    var panels = Array.prototype.slice.call(ex.querySelectorAll(".panel"));
    function pick(id) {
      spots.forEach(function (s) { s.setAttribute("aria-pressed", s.getAttribute("data-show") === id ? "true" : "false"); });
      panels.forEach(function (p) { p.hidden = p.id !== id; });
    }
    spots.forEach(function (s) {
      s.type = "button";
      s.addEventListener("click", function () { pick(s.getAttribute("data-show")); });
    });
    if (spots[0]) pick(spots[0].getAttribute("data-show"));
  });

  /* ---------- checklist persistence: <ul class="check" data-key="ch05"> ---------- */
  document.querySelectorAll("ul.check[data-key]").forEach(function (ul) {
    var key = "se-guide-v2-" + ul.getAttribute("data-key");
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch (e) { saved = {}; }
    ul.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      if (saved[cb.id]) cb.checked = true;
      cb.addEventListener("change", function () {
        saved[cb.id] = cb.checked;
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) { /* storage unavailable */ }
      });
    });
  });

  /* ---------- reading progress bar ---------- */
  var bar = document.querySelector(".topbar .progress");
  if (bar) {
    var upd = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + "%";
    };
    window.addEventListener("scroll", upd, { passive: true });
    upd();
  }
})();
