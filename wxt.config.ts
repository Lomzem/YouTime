import { defineConfig } from "wxt"

export default defineConfig({
    manifest: {
        permissions: ["storage", "scripting", "activeTab", "windows"],
        commands: {
            "save-timestamp": {
                suggested_key: {
                    default: "Alt+T",
                },
                description: "Save Timestamp",
            },
        },
    },
})
