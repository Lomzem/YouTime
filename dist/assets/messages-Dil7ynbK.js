function sendTimestamp(timestamp) {
  const msg = {
    type: "timestamp",
    data: timestamp
  };
  chrome.runtime.sendMessage(msg);
}
function sendVaultMounted() {
  const msg = {
    type: "vault-mounted",
    data: null
  };
  chrome.runtime.sendMessage(msg);
}
function sendAllVideos(allVideos) {
  const msg = {
    type: "all-videos",
    data: allVideos
  };
  chrome.runtime.sendMessage(msg);
}
export {
  sendTimestamp as a,
  sendVaultMounted as b,
  sendAllVideos as s
};
