import tsconfigPaths from "vite-tsconfig-paths"

/** @type {import('vite').UserConfig} */
export default {
    build: {
        outDir: "dist",
        minify: false,
        rollupOptions: {
            input: {
                background: "./src/background/background.ts",
                getInput: "./src/content/getInput/getInput.ts",
                vault: "./src/vault/vault.html",
            },
            output: {
                entryFileNames: `[name].js`,
            },
        },
    },
    plugins: [tsconfigPaths()],
}
