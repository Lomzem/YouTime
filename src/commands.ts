// src/commands.ts

import { SaveTimestampMessage } from "./client/getInput";
import { insertTimestamp } from "./storage";
import { AllVideos } from "./types";

enum Command {
  SaveTimestamp = "save-timestamp",
  OpenVault = "open-vault",
}

enum MessageType {
  SaveTimestamp = "save-timestamp",
  VaultMounted = "vault-mounted",
}

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case MessageType.SaveTimestamp:
      const timestampmsg = message as SaveTimestampMessage;
      insertTimestamp(
        timestampmsg.timestampNote,
        timestampmsg.url,
        timestampmsg.title,
      );
      break;
    case MessageType.VaultMounted:
      chrome.storage.local.get("youtime").then((result) => {
        const all_videos: AllVideos = result["youtime"] ?? {};
        chrome.runtime.sendMessage({
          type: "all-videos",
          all_videos: all_videos,
        });
      });
      break;
  }
});

function openVault() {
  chrome.tabs.create({
    url: "vault/vault.html",
    active: true,
  });
}

chrome.commands.onCommand.addListener(
  async (command: string, tab: chrome.tabs.Tab) => {
    if (!tab.url || !tab.url.includes("youtube.com")) {
      return;
    }
    switch (command) {
      case Command.SaveTimestamp:
        chrome.scripting.executeScript({
          target: { tabId: tab.id || 0 },
          files: ["getInput.js"],
        });
        break;
      case Command.OpenVault:
        openVault();
        break;
      default:
        console.log("Unknown command");
        break;
    }
  },
);
