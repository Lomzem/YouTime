import styles from "./styles"

export default function injectHTML() {
    let youtimediv: HTMLDivElement | null = document.querySelector("#youtime")
    if (!youtimediv) {
        youtimediv = document.createElement("div")
        youtimediv.id = "youtime"
    }

    youtimediv.innerHTML = `
        ${styles}
        <section>
            <main>
            <header>
                <span class="badge">${getCurrentTime()}</span>
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
