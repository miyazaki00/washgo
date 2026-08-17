const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "メニューを開く");
  nav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "メニューを閉じる" : "メニューを開く");
  nav?.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});
updateHeader();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const formatYen = (amount) => `¥${amount.toLocaleString("ja-JP")}`;

const initPricing = () => {
  const makerSelect = document.getElementById("maker-select");
  const modelSelect = document.getElementById("model-select");
  const priceEmpty = document.getElementById("price-empty");
  const priceResult = document.getElementById("price-result");
  const pickerHint = document.getElementById("picker-hint");

  if (!makerSelect || !modelSelect || !priceEmpty || !priceResult) return;

  const { manufacturers } = window.WASHGO_CARS || {};
  const { menus, options, sizeLabels } = window.WASHGO_PRICES || {};

  if (!manufacturers?.length || !menus?.length) {
    if (pickerHint) {
      pickerHint.textContent =
        "車種データの読み込みに失敗しました。cars.js が配置されているか、ページを再読み込みしてください。";
      pickerHint.classList.add("picker-hint-error");
    }
    return;
  }

  const selectedVehicle = document.getElementById("selected-vehicle");
  const sizeBadge = document.getElementById("size-badge");
  const sizeDesc = document.getElementById("size-desc");
  const menuCards = document.getElementById("menu-cards");
  const optionsBody = document.getElementById("options-body");

  manufacturers.forEach((maker) => {
    const option = document.createElement("option");
    option.value = maker.id;
    option.textContent = maker.name;
    makerSelect.appendChild(option);
  });

  const resetModelSelect = (placeholder = "車種を選択してください") => {
    modelSelect.innerHTML = "";
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = placeholder;
    modelSelect.appendChild(empty);
    modelSelect.value = "";
    modelSelect.setAttribute("disabled", "disabled");
  };

  const enableModelSelect = () => {
    modelSelect.removeAttribute("disabled");
  };

  const hidePrices = () => {
    priceResult.hidden = true;
    priceEmpty.hidden = false;
  };

  const renderPrices = (maker, model) => {
    const size = model.size;
    selectedVehicle.textContent = `${maker.name} ${model.name}`;
    sizeBadge.textContent = `SIZE ${size}`;
    sizeDesc.textContent = sizeLabels[size] || "";

    menuCards.innerHTML = menus
      .map(
        (menu, index) => `
        <article class="menu-price-card${index === 0 ? " featured" : ""}">
          <span class="menu-badge">${menu.badge}</span>
          <h4>${menu.name}</h4>
          <p class="menu-price">${formatYen(menu.prices[size])}</p>
          <ul class="menu-includes">
            ${menu.includes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
      )
      .join("");

    optionsBody.innerHTML = options
      .map(
        (opt) => `
        <tr>
          <td>${opt.name}</td>
          <td>${formatYen(opt.prices[size])}</td>
        </tr>
      `
      )
      .join("");

    priceEmpty.hidden = true;
    priceResult.hidden = false;
  };

  const onMakerChange = () => {
    resetModelSelect();
    hidePrices();

    const maker = manufacturers.find((m) => m.id === makerSelect.value);
    if (!maker) return;

    maker.models.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.name;
      option.textContent = model.name;
      modelSelect.appendChild(option);
    });
    enableModelSelect();
  };

  const onModelChange = () => {
    const maker = manufacturers.find((m) => m.id === makerSelect.value);
    const modelName = modelSelect.value;
    if (!maker || !modelName) {
      hidePrices();
      return;
    }

    const model = maker.models.find((m) => m.name === modelName);
    if (!model) {
      hidePrices();
      return;
    }

    renderPrices(maker, model);
  };

  makerSelect.addEventListener("change", onMakerChange);
  modelSelect.addEventListener("change", onModelChange);

  resetModelSelect("先にメーカーを選択してください");
  hidePrices();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPricing);
} else {
  initPricing();
}
