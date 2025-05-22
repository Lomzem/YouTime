export function getCurrentTime(): string {
    const video = document.querySelector("video")
    if (!video) throw new Error("Could not find video element to parse time")

    const time = video.currentTime
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    let padSeconds = String(seconds).padStart(2, "0")

    return hours > 0
        ? `${hours}:${minutes}:${padSeconds}`
        : `${minutes}:${padSeconds}`
}

export function getCleanURL(): string {
    console.log("in getCleanURL")
    const url = new URL(window.location.href)

    /* Constant from YouTube */
    const videoId = url.searchParams.get("v")

    if (!videoId || videoId.length <= 0)
        throw new Error("Could not find video id")

    return `https://youtu.be/${videoId}`
}

export function getYTTitle(): string {
    const titleElem = document.querySelector(
        "#title > h1 > yt-formatted-string"
    )
    if (!titleElem || !titleElem.textContent) {
        console.log("Could not find youtube title")
        return "ERROR: Invalid title"
    }
    return titleElem.textContent
}

export function urlToThumbnail(url: string): string {
    const id = url.split("/").pop()
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
