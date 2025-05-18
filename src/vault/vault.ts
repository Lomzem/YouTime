import { ExtensionMsg, sendVaultMounted } from "@/messages"
import { AllVideos } from "@/types"

console.log("hello")

chrome.runtime.onMessage.addListener((message: ExtensionMsg) => {
    if (message.type != "all-videos") return
    console.log(message.data)
    hydrate(message.data)
})

/* Send message should be AFTER listener established */
sendVaultMounted()

function hydrate(all_videos: AllVideos) {
    console.log(all_videos)
    const videoList = document.querySelector(".video-list")

    for (const [, video] of Object.entries(all_videos)) {
        // Create video item
        const videoItem = document.createElement("li")
        videoItem.className = "video-item"

        // Create and add video title
        const videoTitle = document.createElement("div")
        videoTitle.className = "video-title"
        videoTitle.textContent = video.title
        videoItem.appendChild(videoTitle)

        // Create timestamp list
        const timestampList = document.createElement("ul")
        timestampList.className = "timestamp-list"

        // Add all timestamps
        video.timestamps.forEach((timestamp) => {
            const timestampItem = document.createElement("li")
            timestampItem.className = "timestamp-item"

            const timeSpan = document.createElement("span")
            timeSpan.className = "timestamp-time"
            timeSpan.textContent = timestamp.time

            const noteSpan = document.createElement("span")
            noteSpan.className = "timestamp-note"
            noteSpan.textContent = timestamp.note

            timestampItem.appendChild(timeSpan)
            timestampItem.appendChild(noteSpan)
            timestampList.appendChild(timestampItem)
        })

        videoItem.appendChild(timestampList)
        videoList.appendChild(videoItem)
    }
}
