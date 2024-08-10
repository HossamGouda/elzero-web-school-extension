# Elzero Web Extension

This Chrome extension is developed for the students of Elzero Web School. It allows users to toggle a dark mode on and off for the Elzero web courses platform.

## Features

- Toggle dark mode using a checkbox in the popup.
- Saves the dark mode preference using `chrome.storage.local`.
- Applies dark mode styles using a custom CSS file.

## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned this repository.
5. The extension should now appear in your list of installed extensions.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Use the checkbox to toggle dark mode on and off.
3. Your preference will be saved and applied automatically when you revisit the site.

## Files

### background.js

Handles the background processes, including retrieving the dark mode status and sending it to the content script.

### content.js

Applies or removes the dark mode styles based on the user's preference.

### popup.js

Manages the popup UI, allowing users to toggle dark mode and saving their preference.

### manifest.json

The configuration file for the Chrome extension, specifying permissions, scripts, and other settings.

### darkmode.css

The CSS file that contains the dark mode styles.

## Permissions

The extension requires the following permissions:

- `storage`: To save and retrieve user preferences.
- `tabs`: To query active tabs and send messages.
- `activeTab`: To interact with the current active tab.
- Specific URLs: To apply content scripts on specified URLs.

## Future Features

We plan to add new features to enhance the functionality of this extension in the future. Stay tuned for updates!

## License

This project is licensed under the MIT License.

---

For more information and learning resources, visit [Elzero Web School](https://elzerocourses.teachable.com/).
