chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveHtml") {
    console.log("Got", request.html);
  }
});
