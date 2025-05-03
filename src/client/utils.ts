export function getCurrentTime(): string | undefined {
  return document.querySelector(
    "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-time-display.notranslate > span.ytp-time-wrapper > span.ytp-time-current",
  )?.innerHTML;
}

export function getCleanURL(): string | undefined {
  return (
    document.querySelector("link[rel='shortlinkUrl']")?.getAttribute("href") ??
    undefined
  );
}

export function getYoutubeTitle(): string {
  const titleElem = document.querySelector("#title > h1 > yt-formatted-string");
  if (!titleElem || !titleElem.textContent) {
    console.log("Could not find youtube title");
    return "ERROR: Invalid title";
  }
  return titleElem.textContent;
}
