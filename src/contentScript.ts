const youtubeTitle = document.querySelector(
  "#title > h1 > yt-formatted-string",
);

if (!youtubeTitle) {
  console.log("Could not find youtube title");
}

console.log(youtubeTitle?.textContent);

chrome.runtime.sendMessage({
  type: "youtube-title",
  title: youtubeTitle?.textContent,
});
