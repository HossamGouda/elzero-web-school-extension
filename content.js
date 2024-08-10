function applyDarkMode(enabled) {
  const cssLink = "darkmode.css";
  const cssFiles = document.querySelectorAll(`link[href="${cssLink}"]`);

  if (enabled) {
    if (cssFiles.length === 0) {
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = chrome.runtime.getURL(cssLink);
      document.head.appendChild(linkElement);
    }
  } else {
    cssFiles.forEach((cssFile) => cssFile.remove());
  }
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggleStyles !== undefined) {
    applyDarkMode(Boolean(request.checkboxStatus));
    sendResponse({status: "success"});
  } else {
    sendResponse({status: "error", message: "Invalid request"});
  }
});

// Check and apply the saved preference when content script loads
window.addEventListener("load", () => {
  chrome.storage.local.get(["darkMode"], (result) => {
    if (result.darkMode !== undefined) {
      applyDarkMode(result.darkMode);
    } else {
      applyDarkMode(false); // Default to false if not set
    }
  });
});
