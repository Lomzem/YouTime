// src/commands.ts

import { YouTubeData } from "./contentScript";
import { YouTubeVideo } from "./types";

enum Command {
  SaveTimestamp = "save-timestamp",
}

async function saveTimestamp(video: YouTubeVideo) {
  chrome.storage.sync.set({ [video.url]: video });
  console.log("Saved timestamp");
  console.log(await chrome.storage.sync.get(video.url));
}

async function createYouTubeVideo(tab: chrome.tabs.Tab) {
  // chrome.storage.sync.set({ myKey: "myValue" });
  // const value = chrome.storage.sync.get("myKey");
  chrome.scripting.executeScript({
    target: { tabId: tab.id || 0 },
    files: ["contentScript.js"],
  });

  const data: YouTubeData = await new Promise((resolve) => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "youtube-data") {
        resolve(message);
      }
    });
  });

  const video: YouTubeVideo = {
    url: tab.url!,
    title: data.title,
    timestamps: [
      {
        time: data.timestamp,
        value: "test",
      },
    ],
  };

  await saveTimestamp(video);
  chrome.scripting.executeScript({
    target: { tabId: tab.id || 0 },
    files: ["getInput.js"],
  });
}

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
    console.log(`Command: ${command}`);
  },
);
