import { ExtensionMsg } from "@/messages"
import { Timestamp } from "@/types"

function handleTimestamp(timestamp: Timestamp) {
    console.log(timestamp)
}

chrome.runtime.onMessage.addListener((message: ExtensionMsg) => {
    switch (message.type) {
        case "timestamp":
            handleTimestamp(message.data)
    }
})
