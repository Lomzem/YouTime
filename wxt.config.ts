import { defineConfig } from "wxt"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    vite: () => ({
        plugins: [tailwindcss()],
    }),
    modules: ["@wxt-dev/module-svelte"],
    manifest: {
        permissions: ["storage", "scripting", "activeTab", "windows"],
        commands: {
            "save-timestamp": {
                suggested_key: {
                    default: "Alt+T",
                },
                description: "Save Timestamp",
            },
            "open-vault": {
                suggested_key: {
                    default: "Alt+V",
                },
                description: "Open Timestamp Vault",
            },
        },
        content_security_policy: {
            extension_pages: "script-src 'self'; object-src 'self'",
        },
        action: {
            default_popup: "vault.html",
        },
    },
})
