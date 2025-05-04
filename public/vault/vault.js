console.log("hello");

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "all-videos":
      console.log(message.all_videos);
      hydrate(message.all_videos);
      break;
  }
});

chrome.runtime.sendMessage({
  type: "vault-mounted",
});

function hydrate(all_videos) {
  console.log(all_videos);
  for (const [, video] of Object.entries(all_videos)) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    const innerul = document.createElement("ul");
    li.appendChild(document.createTextNode(video.title));
    li.appendChild(innerul);

    video.timestamps.forEach((timestamp) => {
      const li = document.createElement("li");
      li.innerText = `${timestamp.time} - ${timestamp.note}`;
      innerul.appendChild(li);
    });
  }
}
