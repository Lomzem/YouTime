export function getCurrentTime(): string | undefined {
    const video = document.querySelector("video")
    if (!video) return undefined

    const time = video.currentTime
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    let padSeconds = String(seconds).padStart(2, "0")
    console.log("padSeconds", padSeconds)

    return hours > 0
        ? `${hours}:${minutes}:${padSeconds}`
        : `${minutes}:${padSeconds}`
}

export function getCleanURL(): string | undefined {
    const url = new URL(window.location.href)

    /* Constant from YouTube */
    const videoId = url.searchParams.get("v")

    if (videoId.length <= 0) return undefined
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
