export interface Timestamp {
    time: string
    note: string
}

export interface YTVideo {
    title: string
    timestamps: Timestamp[]
}

export interface AllVideos {
    [url: string]: YTVideo
}
