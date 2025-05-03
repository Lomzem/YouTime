// src/commands.ts

import { YouTubeVideo } from "./types";

enum Command {
  SaveTimestamp = "save-timestamp",
}

async function SaveTimestamp(tab: chrome.tabs.Tab) {
  // chrome.storage.sync.set({ myKey: "myValue" });
  // const value = chrome.storage.sync.get("myKey");
  chrome.scripting.executeScript({
    target: { tabId: tab.id || 0 },
    files: ["contentScript.js"],
  });

  const title: string = await new Promise((resolve) => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "youtube-title") {
        resolve(message.title);
      }
    });
  });

  const video: YouTubeVideo = {
    title,
    url: tab.url!,
  };

  console.log(video);
}

chrome.commands.onCommand.addListener(
  async (command: string, tab: chrome.tabs.Tab) => {
    switch (command) {
      case Command.SaveTimestamp:
        await SaveTimestamp(tab);
        break;
      default:
        console.log("Unknown command");
        break;
    }
    console.log(`Command: ${command}`);
  },
);
