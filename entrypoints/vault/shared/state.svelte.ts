import { AllVideos } from "#imports"

interface AppStateType {
    focused: YTVideo | null
    videosPromise: Promise<YTVideo[]>
}

const mockvideos: YTVideo[] = [
    {
        url: "https://youtu.be/jUiEzVwbdco",
        thumbnailUrl: "https://i.ytimg.com/vi/jUiEzVwbdco/hqdefault.jpg",
        title: "Animated 3D Sphere Intersection Using Only CSS 🤯",
        timestamps: [
            {
                createdAt: new Date(),
                note: "wow cool vid",
                time: "0:20",
            },
        ],
    },
    {
        url: "https://youtu.be/SKUD-Aj1jKg",
        thumbnailUrl: "https://i.ytimg.com/vi/SKUD-Aj1jKg/hqdefault.jpg",
        title: "Using React Libraries Inside Svelte",
        timestamps: [
            {
                createdAt: new Date(),
                note: "wow cool vid",
                time: "0:20",
            },
        ],
    },
]

let videosPromise: Promise<YTVideo[]> = Promise.resolve(mockvideos)
let appState = $state<AppStateType>({
    focused: null,
    videosPromise,
})

export default appState
