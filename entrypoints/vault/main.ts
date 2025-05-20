import { mount } from "svelte"
import App from "./App.svelte"
import "./reset.css"
import "./app.css"

mount(App, {
    target: document.getElementById("app")!,
})
