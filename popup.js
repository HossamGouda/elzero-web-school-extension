document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    '.toggle-switch input[type="checkbox"]'
  );

  console.log("checkboxes ->", checkboxes);

  // Use a single function to handle checkbox initialization and event listener
  const initializeCheckbox = (checkbox) => {
    const featureName = checkbox.id.replace("Checkbox", "");
    chrome.storage.local.get(featureName, (result) => {
      const storedStatus = result[featureName];
      console.log("storedStatus ->", storedStatus);
      checkbox.checked = storedStatus === true;

      // Check if the event listener is already added
      if (!checkbox.dataset.listenerAdded) {
        checkbox.dataset.listenerAdded = "true";

        checkbox.addEventListener("change", () => {
          console.log("Checked box status ->", checkbox.checked);
          chrome.storage.local.set({[featureName]: checkbox.checked});

          // Notify content script to toggle styles
          chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs.length > 0 && tabs[0]) {
              chrome.tabs.sendMessage(tabs[0].id, {
                toggleStyles: true,
                checkboxStatus: checkbox.checked,
              });
            } else {
              console.error("No active tab found.");
            }
          });
        });
      }
    });
  };

  checkboxes.forEach(initializeCheckbox);
});

console.log("popup.js loaded");
