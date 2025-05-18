import { s as sendAllVideos } from "./assets/messages-Dil7ynbK.js";
function openVault() {
  chrome.tabs.create({
    /* Path defined by vite */
    url: "src/vault/vault.html",
    active: true
  });
}
const contentPaths = {
  /* These file paths are ultimately determined by vite config */
  getInput: "getInput.js"
};
function saveTimestamp(tab) {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    files: [contentPaths.getInput]
  });
}
chrome.commands.onCommand.addListener((command, tab) => {
  switch (command) {
    case "open-vault":
      openVault();
      break;
    case "save-timestamp":
      if (!tab.url.includes("youtube.com")) break;
      saveTimestamp(tab);
      break;
  }
});
function insertTimestamp(timestamp) {
  chrome.storage.local.get("youtime", (result) => {
    let all_videos = result["youtime"] ?? {};
    if (!all_videos[timestamp.url]) {
      all_videos[timestamp.url] = {
        title: timestamp.title,
        url: timestamp.url,
        timestamps: []
      };
    }
    all_videos[timestamp.url].timestamps.push(timestamp);
    chrome.storage.local.set({ youtime: all_videos });
  });
}
chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "timestamp":
      insertTimestamp(message.data);
      break;
    case "vault-mounted":
      chrome.storage.local.get("youtime").then((result) => {
        const allVideos = result["youtime"] ?? {};
        sendAllVideos(allVideos);
      });
      break;
  }
});
