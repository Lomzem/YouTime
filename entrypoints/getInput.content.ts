export const getInput = "content-scripts/getInput.js"

export default defineContentScript({
    registration: "runtime",
    main() {
        console.log("Script was executed!")
        return "Hello John!"
    },
})
