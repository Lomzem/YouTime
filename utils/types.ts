export interface Timestamp {
    time: string
    note: string
    createdAt: Date
}

export interface YTVideo {
    title: string
    timestamps: Timestamp[]
    url: string
    thumbnailUrl: string
}

export interface AllVideos {
    [url: string]: YTVideo
}
