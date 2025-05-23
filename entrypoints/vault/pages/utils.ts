import appState from "../shared/state.svelte"

export function sortVideos(videos: YTVideo[]): YTVideo[] {
    let sorted = videos
    switch (appState.sortBy) {
        case "notecount":
            sorted = videos.sort(
                (a, b) => b.timestamps.length - a.timestamps.length
            )
            return appState.sortOrder === "desc" ? sorted.reverse() : sorted
        case "recent":
            /* Sort timestamps */
            videos.map((video) =>
                video.timestamps.sort((a, b) => {
                    return (
                        new Date(a.createdAt).getTime() -
                        new Date(b.createdAt).getTime()
                    )
                })
            )
            sorted = videos.sort((a, b) => {
                return (
                    new Date(b.timestamps[0].createdAt).getTime() -
                    new Date(a.timestamps[0].createdAt).getTime()
                )
            })
            return appState.sortOrder === "desc" ? sorted.reverse() : sorted
        case "title":
            sorted = videos.sort((a, b) => a.title.localeCompare(b.title))
            return appState.sortOrder === "desc" ? sorted.reverse() : sorted
    }
}
