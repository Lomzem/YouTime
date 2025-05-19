import tsconfigPaths from "vite-tsconfig-paths"

/** @type {import('vite').UserConfig} */
export default {
    compilerOptions: {
        target: "ES2020",
        useDefineForClassFields: true,
        module: "ESNext",
        lib: ["ES2020", "DOM", "DOM.Iterable"],
        skipLibCheck: true,

        /* Bundler mode */
        moduleResolution: "bundler",
        allowImportingTsExtensions: true,
        verbatimModuleSyntax: true,
        moduleDetection: "force",
        noEmit: true,

        /* Linting */
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        erasableSyntaxOnly: true,
        noFallthroughCasesInSwitch: true,
        noUncheckedSideEffectImports: true,
    },
    build: {
        outDir: "dist",
        minify: false,
        rollupOptions: {
            input: {
                background: "./src/background/background.ts",
                vault: "./src/vault/vault.html",
                getInput: "./src/content/getInput/getInput.ts",
            },
            output: {
                entryFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
                chunkFileNames: `[name].js`,
            },
        },
    },
    plugins: [tsconfigPaths()],
}
