import { ExtensionMsg, sendAllVideos } from "@/messages"
import { insertTimestamp } from "./storage"
import { AllVideos } from "@/types"

chrome.runtime.onMessage.addListener((message: ExtensionMsg) => {
    switch (message.type) {
        case "timestamp":
            insertTimestamp(message.data)
            break

        case "vault-mounted":
            chrome.storage.local.get("youtime").then((result) => {
                const allVideos: AllVideos = result["youtime"] ?? {}
                sendAllVideos(allVideos)
            })
            break
    }
})
