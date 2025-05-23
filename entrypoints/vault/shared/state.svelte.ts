import { EXTStorage } from "@/utils/storage"

interface AppStateType {
    focused: YTVideo | null
    videosPromise: Promise<YTVideo[]>
    viewMode: "card" | "list"
    sortOrder: "asc" | "desc"
    sortBy: "title" | "recent" | "notecount"
}

// const mockvideos: YTVideo[] = [
//     {
//         url: "https://youtu.be/jUiEzVwbdco",
//         thumbnailUrl: "https://i.ytimg.com/vi/jUiEzVwbdco/hqdefault.jpg",
//         title: "Animated 3D Sphere Intersection Using Only CSS 🤯",
//         timestamps: [
//             {
//                 createdAt: new Date(),
//                 note: "wow cool vid",
//                 time: "0:20",
//             },
//         ],
//     },
//     {
//         url: "https://youtu.be/SKUD-Aj1jKg",
//         thumbnailUrl: "https://i.ytimg.com/vi/SKUD-Aj1jKg/hqdefault.jpg",
//         title: "Using React Libraries Inside Svelte",
//         timestamps: [
//             {
//                 createdAt: new Date(),
//                 note: "wow cool vid",
//                 time: "0:20",
//             },
//         ],
//     },
// ]
// let videosPromise: Promise<YTVideo[]> = Promise.resolve(mockvideos)

const videosPromise: Promise<YTVideo[]> = $state(
    EXTStorage.YTVideos.getValue().then((ytvideos) => {
        if (!ytvideos) return []
        return Object.values(ytvideos)
    })
)
let appState = $state<AppStateType>({
    focused: null,
    videosPromise,
    viewMode: "card",
    sortOrder: "desc",
    sortBy: "recent",
})

storage.watch(EXTStorage.YTVideos.key, (_new: AllVideos | null) => {
    if (!_new) return Promise.resolve([])
    const newVideos = Object.values(_new)
    appState.videosPromise = Promise.resolve(newVideos)
})

export default appState
