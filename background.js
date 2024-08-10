console.log("background.js loaded");

// Use async/await for better readability and error handling
chrome.action.onClicked.addListener(async function (tab) {
  try {
    // Query for the active tab in the current window
    const [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    // Retrieve the checkbox status from chrome storage
    chrome.storage.local.get("darkMode", function (result) {
      if (chrome.runtime.lastError) {
        console.error(
          "Error retrieving from local storage:",
          chrome.runtime.lastError
        );
        return;
      }
      const checkboxStatus = result.darkMode;

      // Send a message to the content script of the active tab
      chrome.tabs.sendMessage(activeTab.id, {
        toggleStyles: true,
        checkboxStatus,
      });
    });
  } catch (error) {
    console.error("Error handling onClicked event:", error);
  }
});
