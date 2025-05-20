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
            default:
                console.log("unknown")
                break
        }
    })
})
