import { contentPaths } from "@/content/paths"

export default function saveTimestamp(tab: chrome.tabs.Tab) {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
        },
        files: [contentPaths.getInput],
    })
}
