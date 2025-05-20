import { EXTStorage } from "@/utils/storage"
import injectHTML from "./getInput/injectHTML"

export const getInputPath = "content-scripts/getInput.js"

function closeYouTime() {
    const youtimediv = document.querySelector("#youtime")
    if (youtimediv) {
        youtimediv.remove()
    }
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
        const saveBtn: HTMLButtonElement | null =
            document.querySelector("#youtime-save-btn")
        if (saveBtn) {
            saveBtn.addEventListener("mousedown", () => {
                /* TODO: Add error message */
                if (!textarea || textarea.value.length <= 0) return

                EXTStorage.YTVideos.getValue().then((ytvideos) => {
                    const cleanURL = getCleanURL()
                    if (!ytvideos) ytvideos = {}
                    if (!ytvideos[cleanURL]) {
                        ytvideos[cleanURL] = {
                            title: getYTTitle(),
                            timestamps: [],
                        }
                    }
                    ytvideos[cleanURL].timestamps.push({
                        note: textarea.value,
                        time: getCurrentTime(),
                    })
                    EXTStorage.YTVideos.setValue(ytvideos)
                })
                closeYouTime()
            })
        }

        if (textarea) {
            textarea.focus()
        }
    },
})
