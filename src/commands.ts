// src/commands.ts

import { SaveTimestampMessage } from "./client/getInput";
import { insertTimestamp } from "./storage";

enum Command {
  SaveTimestamp = "save-timestamp",
}

async function createYouTubeVideo(tab: chrome.tabs.Tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id || 0 },
    files: ["getInput.js"],
  });
}

chrome.runtime.onMessage.addListener((message: SaveTimestampMessage) => {
  if (message.type === "save-timestamp") {
    insertTimestamp(message.timestampNote, message.url);
  }
});

chrome.commands.onCommand.addListener(
  async (command: string, tab: chrome.tabs.Tab) => {
    switch (command) {
      case Command.SaveTimestamp:
        await createYouTubeVideo(tab);
        break;
      default:
        console.log("Unknown command");
        break;
    }
  },
);
