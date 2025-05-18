import { b as sendVaultMounted } from "./assets/messages-Dil7ynbK.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
console.log("hello");
chrome.runtime.onMessage.addListener((message) => {
  if (message.type != "all-videos") return;
  console.log(message.data);
  hydrate(message.data);
});
sendVaultMounted();
function hydrate(all_videos) {
  console.log(all_videos);
  const videoList = document.querySelector(".video-list");
  for (const [, video] of Object.entries(all_videos)) {
    const videoItem = document.createElement("li");
    videoItem.className = "video-item";
    const videoTitle = document.createElement("div");
    videoTitle.className = "video-title";
    videoTitle.textContent = video.title;
    videoItem.appendChild(videoTitle);
    const timestampList = document.createElement("ul");
    timestampList.className = "timestamp-list";
    video.timestamps.forEach((timestamp) => {
      const timestampItem = document.createElement("li");
      timestampItem.className = "timestamp-item";
      const timeSpan = document.createElement("span");
      timeSpan.className = "timestamp-time";
      timeSpan.textContent = timestamp.time;
      const noteSpan = document.createElement("span");
      noteSpan.className = "timestamp-note";
      noteSpan.textContent = timestamp.note;
      timestampItem.appendChild(timeSpan);
      timestampItem.appendChild(noteSpan);
      timestampList.appendChild(timestampItem);
    });
    videoItem.appendChild(timestampList);
    videoList.appendChild(videoItem);
  }
}
