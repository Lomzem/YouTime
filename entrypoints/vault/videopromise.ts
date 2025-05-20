/* import { EXTStorage } from "@/utils/storage"
    let titlesPromise: Promise<string[]> = $state(
    EXTStorage.YTVideos.getValue().then(ytvideos => {
        if (!ytvideos) return []
        return Object.values(ytvideos).map(ytvideo => ytvideo.title)
        })
    )
    storage.watch(EXTStorage.YTVideos.key, (_new: AllVideos | null) => {
        if (!_new) return Promise.resolve([])
        const newTitles = Object.values(_new).map(ytvideo => ytvideo.title)
        titlesPromise = Promise.resolve(newTitles)
        }) */
