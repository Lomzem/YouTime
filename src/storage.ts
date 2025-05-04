import { AllVideos, TimestampNote } from "./types";

export function insertTimestamp(
  timestamp: TimestampNote,
  url: string,
  title: string,
) {
  chrome.storage.local.get("youtime", (result) => {
    let all_videos: AllVideos = result["youtime"] ?? {};
    if (!all_videos[url]) {
      all_videos[url] = {
        title: title,
        url: url,
        timestamps: [],
      };
    }
    all_videos[url].timestamps.push(timestamp);
    chrome.storage.local.set({ youtime: all_videos });
  });
}
