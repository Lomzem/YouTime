export interface Timestamp {
    time: string
    note: string
    url: string
    title: string
}

export interface YTVideo {
    title: string
    url: string
    timestamps: Timestamp[]
}

export interface AllVideos {
    [url: string]: YTVideo
}
