import { AllVideos, Timestamp } from "@/types"

export function insertTimestamp(timestamp: Timestamp) {
    chrome.storage.local.get("youtime", (result) => {
        let all_videos: AllVideos = result["youtime"] ?? {}
        if (!all_videos[timestamp.url]) {
            all_videos[timestamp.url] = {
                title: timestamp.title,
                url: timestamp.url,
                timestamps: [],
            }
        }
        all_videos[timestamp.url].timestamps.push(timestamp)
        chrome.storage.local.set({ youtime: all_videos })
    })
}
