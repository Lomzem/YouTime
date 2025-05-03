export interface YouTubeData {
  type: "youtube-data";
  title: string;
  timestamp: string;
}

const youtubeTitle = document.querySelector(
  "#title > h1 > yt-formatted-string",
);

if (!youtubeTitle) {
  console.log("Could not find youtube title");
}

const currentTimeStr = document.querySelector(
  "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-time-display.notranslate > span.ytp-time-wrapper > span.ytp-time-current",
)?.innerHTML;

const message: YouTubeData = {
  type: "youtube-data",
  title: youtubeTitle?.textContent ?? "ERROR: Invalid title",
  timestamp: currentTimeStr ?? "ERROR: Invalid timestamp",
};

chrome.runtime.sendMessage(message);
