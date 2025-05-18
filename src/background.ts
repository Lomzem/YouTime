import { openVault, saveTimestamp } from "@/commands"

enum Command {
    SaveTimestamp = "save-timestamp",
    OpenVault = "open-vault",
}

chrome.commands.onCommand.addListener((command) => {
    switch (command) {
        case Command.OpenVault:
            openVault()
            break
        case Command.SaveTimestamp:
            saveTimestamp()
            break
    }
})
