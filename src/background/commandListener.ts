import { openVault, saveTimestamp } from "@commands"

enum Command {
    SaveTimestamp = "save-timestamp",
    OpenVault = "open-vault",
}

chrome.commands.onCommand.addListener((command, tab) => {
    switch (command) {
        case Command.OpenVault:
            openVault()
            break
        case Command.SaveTimestamp:
            /* Only want to trigger this on youtube.com */
            if (!tab.url.includes("youtube.com")) break
            saveTimestamp(tab)
            break
    }
})
