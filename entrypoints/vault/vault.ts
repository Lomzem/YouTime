import { EXTStorage } from "@/utils/storage"

async function hydrate() {
    console.log("begin hydrate")
    const all_videos = await EXTStorage.YTVideos.getValue()
    if (!all_videos) return
    const videoList: HTMLUListElement | null =
        document.querySelector(".video-list")

    if (!videoList) return

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

console.log("running")
hydrate()
console.log("hydrated")
