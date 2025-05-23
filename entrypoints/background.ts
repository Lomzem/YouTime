import Command from "@/utils/commands"
import { getInputPath } from "./getInput.content"

export default defineBackground(() => {
    browser.commands.onCommand.addListener((command, tab) => {
        switch (command) {
            case Command.SaveTimestamp:
                browser.scripting.executeScript({
                    target: { tabId: tab.id! },
                    files: [getInputPath],
                })
                break
            case Command.OpenVault:
                browser.tabs.create({
                    url: browser.runtime.getURL("/vault.html"),
                    active: true,
                })
                break
            default:
                console.log("unknown")
                break
        }
    })
})
