// src/commands.ts

import { SaveTimestampMessage } from "./client/getInput";
import { insertTimestamp } from "./storage";

enum Command {
  SaveTimestamp = "save-timestamp",
  OpenVault = "open-vault",
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
        chrome.scripting.executeScript({
          target: { tabId: tab.id || 0 },
          files: ["getInput.js"],
        });
        break;
      default:
        console.log("Unknown command");
        break;
    }
  },
);
