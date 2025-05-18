import tsconfigPaths from "vite-tsconfig-paths"

/** @type {import('vite').UserConfig} */
export default {
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                background: "src/background.ts",
                // content: "src/content.ts",
            },
            output: {
                entryFileNames: `[name].js`,
            },
        },
    },
    plugins: [tsconfigPaths()],
}
