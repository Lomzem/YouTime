import { AllVideos, Timestamp } from "./types"

export type MsgType = "timestamp" | "vault-mounted" | "all-videos"

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

export function sendVaultMounted() {
    const msg: ExtensionMsg = {
        type: "vault-mounted",
        data: null,
    }
    chrome.runtime.sendMessage(msg)
}

export function sendAllVideos(allVideos: AllVideos) {
    const msg: ExtensionMsg = {
        type: "all-videos",
        data: allVideos,
    }
    chrome.runtime.sendMessage(msg)
}
