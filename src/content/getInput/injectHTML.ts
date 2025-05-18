import { getCurrentTime } from "../utils"
import { getStyles } from "./styles"

export default function injectHTML() {
    const currentTime = getCurrentTime()

    let youtimediv: HTMLDivElement = document.querySelector("#youtime")
    if (!youtimediv) {
        youtimediv = document.createElement("div")
        youtimediv.id = "youtime"
    }

    youtimediv.innerHTML = `
        ${getStyles()}
        <section>
            <main>
            <header>
                <span class="badge">${currentTime}</span>
                <h3>Add a Note</h3>
            </header>
            <textarea id="youtime-input" placeholder="What are your thoughts on this moment?"></textarea>
            <footer>
                <button id="youtime-cancel-btn" class="outline">Cancel</button>
                <button id="youtime-save-btn" class="primary">Save</button>
            </footer>
            </main>
        </section>
    `
    document.body.prepend(youtimediv)
}
