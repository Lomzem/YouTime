import { ExtensionMsg } from "@/messages"
import { insertTimestamp } from "./storage"

chrome.runtime.onMessage.addListener((message: ExtensionMsg) => {
    switch (message.type) {
        case "timestamp":
            insertTimestamp(message.data)
    }
})
