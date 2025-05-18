import { sendTimestamp } from "@/messages"
import injectHTML from "./injectHTML"
import { getCleanURL, getCurrentTime, getYTTitle } from "../utils"

function closeYouTime() {
    const youtimediv = document.querySelector("#youtime")
    if (youtimediv) {
        youtimediv.remove()
    }
}

function getInput() {
    /* injectHTML must come first */
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
            if (!textarea || textarea.value === "") return
            sendTimestamp({
                time: getCurrentTime(),
                note: textarea.value,
                url: getCleanURL(),
                title: getYTTitle(),
            })
            closeYouTime()
        })
    }

    if (textarea) {
        textarea.focus()
    }
}

getInput()
