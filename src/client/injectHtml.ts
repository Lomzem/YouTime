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
<section id="youtime" class="youtime">
    <main class="youtime">
        <h1 class="youtime header">Add a Note</h1>
        <p>Timestamp: ${currentTime}</p>
        <textarea id="youtime-input" class="youtime" placeholder="Add a note..."></textarea>
        <button id="youtime-save-btn">Save</button>
    </main>
</section>
`;

  document.body.prepend(div);
}
