(() => {
  const marketSelect = document.querySelector("#market-select");
  const languageToggle = document.querySelector(".language-toggle");
  const marketMessage = document.querySelector("#market-message");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  const categoryButtons = [...document.querySelectorAll(".category-option")];
  const catalogMessage = document.querySelector("#catalog-message");
  const catalogState = document.querySelector("#catalog-state");
  let selectedMarket = marketSelect.value;

  const marketCopy = {
    KE: {
      en: "Kenya orders: complimentary delivery · M-Pesa payments are not connected yet · KSh prices",
      sw: "Oda za Kenya: usafirishaji bila malipo · Malipo ya M-Pesa bado hayajaunganishwa · Bei kwa KSh",
    },
    UG: {
      en: "Uganda orders: freight quoted manually · payment option to be confirmed · UGX prices",
      sw: "Oda za Uganda: gharama ya usafirishaji hutajwa · njia ya malipo itathibitishwa · Bei kwa UGX",
    },
    TZ: {
      en: "Tanzania orders: freight quoted manually · payment option to be confirmed · TSh prices",
      sw: "Oda za Tanzania: gharama ya usafirishaji hutajwa · njia ya malipo itathibitishwa · Bei kwa TSh",
    },
  };

  const categoryLabels = {
    all: { en: "all bags", sw: "mifuko yote" },
    backpacks: { en: "backpacks", sw: "mikoba ya mgongoni" },
    travel: { en: "travel duffels", sw: "mifuko ya safari" },
    sling: { en: "sling bags", sw: "mikoba ya bega" },
    totes: { en: "tote bags", sw: "mifuko ya mkononi" },
    crossbody: { en: "crossbody bags", sw: "mifuko ya kuvuka kifua" },
    handbags: { en: "handbags and purses", sw: "mikoba ya mikono na pochi" },
    wallets: { en: "wallets", sw: "pochi" },
    caps: { en: "caps", sw: "kofia" },
  };

  let language = "en";

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-sw]").forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    document.querySelectorAll("[data-aria-en][data-aria-sw]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`aria${capitalize(language)}`]);
    });
    document.title = document.querySelector("title").dataset[language];
    const description = document.querySelector('meta[name="description"]');
    description.setAttribute("content", description.dataset[`content${capitalize(language)}`]);
    languageToggle.textContent = language === "en" ? "SW" : "EN";
    languageToggle.setAttribute("aria-pressed", String(language === "sw"));
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch language to Swahili" : "Badili lugha iwe Kiingereza",
    );
    menuToggle.setAttribute(
      "aria-label",
      menuToggle.getAttribute("aria-expanded") === "true"
        ? language === "en" ? "Close navigation" : "Funga menyu"
        : language === "en" ? "Open navigation" : "Fungua menyu",
    );
    updateMarketMessage();
    updateCatalogMessage(document.querySelector(".category-option.is-selected")?.dataset.category || "all");
  }

  function updateMarketMessage() {
    marketMessage.textContent = marketCopy[selectedMarket][language];
    marketMessage.dataset.market = selectedMarket;
  }

  function updateCatalogMessage(category) {
    const selected = categoryLabels[category] || categoryLabels.all;
    if (category === "all") {
      catalogMessage.textContent = language === "en"
        ? "Product details and prices are being prepared."
        : "Maelezo na bei za bidhaa zinaandaliwa.";
      catalogState.textContent = language === "en"
        ? "No ready-made products have been entered yet."
        : "Hakuna bidhaa zilizowekwa bado.";
      return;
    }
    catalogMessage.textContent = language === "en"
      ? `${capitalize(selected.en)} details and prices are being prepared.`
      : `Maelezo na bei za ${selected.sw} zinaandaliwa.`;
    catalogState.textContent = language === "en"
      ? `The ${selected.en} category is ready for product listings.`
      : `Aina ya ${selected.sw} iko tayari kwa bidhaa.`;
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  marketSelect.addEventListener("change", () => {
    selectedMarket = marketSelect.value;
    try {
      localStorage.setItem("aether-market", selectedMarket);
    } catch {
      // Keep the selected market in page state when browser storage is unavailable.
    }
    updateMarketMessage();
  });

  languageToggle.addEventListener("click", () => {
    applyLanguage(language === "en" ? "sw" : "en");
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute(
      "aria-label",
      !isOpen ? language === "en" ? "Close navigation" : "Funga menyu" : language === "en" ? "Open navigation" : "Fungua menyu",
    );
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", language === "en" ? "Open navigation" : "Fungua menyu");
      primaryNav.classList.remove("is-open");
    });
  });

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      updateCatalogMessage(button.dataset.category);
    });
  });

  let savedMarket = null;
  try {
    savedMarket = localStorage.getItem("aether-market");
  } catch {
    // Market selection remains usable for this page session without persistence.
  }
  if (savedMarket && marketCopy[savedMarket]) {
    selectedMarket = savedMarket;
    marketSelect.value = savedMarket;
  }
  document.querySelector("#year").textContent = new Date().getFullYear();
  updateMarketMessage();
})();
