import { TimestampNote, YouTubeVideo } from "./types";

export function insertTimestamp(timestamp: TimestampNote, url: string) {
  chrome.storage.local.get([url], (result) => {
    let video: YouTubeVideo | undefined = result[url];
    if (!video) {
      video = {
        title: "foo",
        url: url,
        timestamps: [],
      };
    }
    video.timestamps.push(timestamp);
    chrome.storage.local.set({ [url]: video });
  });
}
