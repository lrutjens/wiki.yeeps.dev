(function () {
  var NEW_WIKI_BASE = "https://yeeps.wiki.gg";

  function getDestination() {
    var path = window.location.pathname;
    if (path.indexOf("/cooking/") !== -1) {
      return {
        url: NEW_WIKI_BASE + "/wiki/Cooking",
        message: "This page has moved. Check out the Cooking page on the new Yeeps Wiki."
      };
    }
    if (path.indexOf("/brewing/") !== -1) {
      return {
        url: NEW_WIKI_BASE + "/",
        message: "This site has a new home. Check out the new Yeeps Wiki."
      };
    }
    if (path.indexOf("/releaseNotes/") !== -1) {
      return {
        url: NEW_WIKI_BASE + "/wiki/Update_Log",
        message: "This page has moved. Check out the Update Log on the new Yeeps Wiki."
      };
    }
    return {
      url: NEW_WIKI_BASE + "/",
      message: "This site has a new home. Check out the new Yeeps Wiki."
    };
  }

  function wasReload() {
    try {
      var entries = performance.getEntriesByType("navigation");
      if (entries && entries.length) {
        return entries[0].type === "reload";
      }
      if (performance.navigation) {
        return performance.navigation.type === 1;
      }
    } catch (e) {}
    return false;
  }

  function initPopup(destination) {
    var SEEN_KEY = "yeepsNewWikiPopupSeen";
    var alreadySeen = sessionStorage.getItem(SEEN_KEY) === "1";
    if (alreadySeen && !wasReload()) return;
    sessionStorage.setItem(SEEN_KEY, "1");

    var overlay = document.createElement("div");
    overlay.className = "new-wiki-popup-overlay";
    overlay.innerHTML =
      '<div class="new-wiki-popup" role="dialog" aria-modal="true" aria-labelledby="new-wiki-popup-title">' +
        '<button type="button" class="new-wiki-popup-close" aria-label="Close">&times;</button>' +
        '<h2 id="new-wiki-popup-title">We’ve moved!</h2>' +
        '<p>Yeeps Wiki now lives at <strong>yeeps.wiki.gg</strong>. The new wiki is where all updates happen from now on.</p>' +
        '<div class="new-wiki-popup-actions">' +
          '<a class="new-wiki-popup-visit" href="' + destination.url + '">Take me to the new wiki</a>' +
          '<button type="button" class="new-wiki-popup-dismiss">Stay on this page</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    function close() {
      overlay.remove();
      document.removeEventListener("keydown", onKeydown);
    }
    function onKeydown(e) {
      if (e.key === "Escape") close();
    }

    overlay.querySelector(".new-wiki-popup-close").addEventListener("click", close);
    overlay.querySelector(".new-wiki-popup-dismiss").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", onKeydown);
  }

  function initBanner(destination) {
    var banner = document.createElement("div");
    banner.className = "new-wiki-footer-banner";
    banner.innerHTML =
      '<span>' + destination.message + '</span>' +
      '<a class="new-wiki-footer-banner-cta" href="' + destination.url + '">Go to new wiki →</a>';
    document.body.appendChild(banner);
    document.body.classList.add("has-new-wiki-banner");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var destination = getDestination();
    initPopup(destination);
    initBanner(destination);
  });
})();
