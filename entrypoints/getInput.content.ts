import { EXTStorage } from "@/utils/storage"
import injectHTML from "./getInput/injectHTML"

export const getInputPath = "content-scripts/getInput.js"

function closeYouTime() {
    const youtimediv = document.querySelector("#youtime")
    if (youtimediv) {
        youtimediv.remove()
    }
}

function saveTimestamp(note: string) {
    if (note.trim().length === 0) return
    EXTStorage.YTVideos.getValue().then((ytvideos) => {
        const cleanURL = getCleanURL()
        if (!ytvideos) ytvideos = {}
        if (!ytvideos[cleanURL]) {
            ytvideos[cleanURL] = {
                title: getYTTitle(),
                timestamps: [],
                url: cleanURL,
                thumbnailUrl: urlToThumbnail(cleanURL),
            }
        }
        ytvideos[cleanURL].timestamps.push({
            note,
            time: getCurrentTime(),
            createdAt: new Date(),
        })
        ytvideos[cleanURL].timestamps.sort((a, b) => {
            return (
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            )
        })
        EXTStorage.YTVideos.setValue(ytvideos)
    })
    closeYouTime()
}

export default defineContentScript({
    registration: "runtime",
    main() {
        injectHTML()
        const cancelBtn: HTMLButtonElement | null = document.querySelector(
            "#youtime-cancel-btn"
        )

        if (cancelBtn) {
            cancelBtn.addEventListener("mousedown", () => {
                closeYouTime()
            })
        }
        const textarea: HTMLTextAreaElement | null =
            document.querySelector("#youtime-input")

        if (textarea) {
            textarea.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    saveTimestamp(textarea.value)
                }
            })
        }

        const saveBtn: HTMLButtonElement | null =
            document.querySelector("#youtime-save-btn")
        if (saveBtn) {
            saveBtn.addEventListener("mousedown", () => {
                /* TODO: Add error message */
                if (!textarea) return
                saveTimestamp(textarea.value)
            })
        }

        if (textarea) {
            textarea.focus()
        }
    },
})
