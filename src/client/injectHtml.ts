import { styles } from "./styles";
import { getCurrentTime } from "./utils";

export default function injectHtml() {
  const currentTime = getCurrentTime();

  const youtimediv = document.querySelector("#youtime");
  let div;
  if (youtimediv) {
    div = youtimediv;
  } else {
    div = document.createElement("div");
    div.id = "youtime";
  }

  div.innerHTML = `
  ${styles}
<section id="youtime">
    <main>
    <header>
        <span class="badge">${currentTime}</span>
        <h3>Add a Note</h1>
    </header>
    <textarea id="youtime-input" placeholder="What are your thoughts on this moment?"></textarea>
    <footer>
        <button id="youtime-cancel-btn" class="outline">Cancel</button>
        <button id="youtime-save-btn" class="primary">Save</button>
    </footer>
    </main>
</section>
`;

  document.body.prepend(div);
}
