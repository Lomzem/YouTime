import { Timestamp } from "./types"

export type MsgType = "timestamp"

export interface ExtensionMsg {
    type: MsgType
    data: any
}

export function sendTimestamp(timestamp: Timestamp) {
    const msg: ExtensionMsg = {
        type: "timestamp",
        data: timestamp,
    }
    chrome.runtime.sendMessage(msg)
}
