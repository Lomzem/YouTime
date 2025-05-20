import { AllVideos } from "./types"

export namespace EXTStorage {
    export const YTVideos = storage.defineItem<AllVideos>("local:ytvideos")
}
