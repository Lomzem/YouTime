export default function openVault() {
    chrome.tabs.create({
        /* Path defined by vite */
        url: "src/vault/vault.html",
        active: true,
    })
}
