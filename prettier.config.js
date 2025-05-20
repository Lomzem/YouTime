/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: "es5",
    useTabs: false,
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
}

export default config
