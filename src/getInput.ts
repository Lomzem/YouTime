function main() {
  const youtimediv = document.querySelector("#youtime");
  let div;
  if (youtimediv) {
    div = youtimediv;
  } else {
    div = document.createElement("div");
    div.id = "youtime";
  }

  div.innerHTML = `
<style>
section.youtime {
    --youtime-bg: #1e2030;
    --youtime-fg: #cad3f5;
    --youtime-muted-fg: #6e738d;
    --youtime-card-bg: #24273a;
    --youtime-border-radius: 16px;
    --youtime-button-bg: #a6e3a1;
}

section.youtime {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--youtime-fg);
}
main.youtime {
    width: 75dvh;
    height: 75dvh;
    background: var(--youtime-bg);
    border-radius: var(--youtime-border-radius);
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
h1.youtime {
    text-align: center;
}

textarea.youtime {
    flex: 1;
    resize: none;
    border: none;
    border-radius: var(--youtime-border-radius);
    padding: 16px;
    outline: none;
    background: var(--youtime-card-bg);
    color: var(--youtime-fg);
    font-family: monospace;
}

textarea.youtime::placeholder {
    color: var(--youtime-muted-fg);
}

section.youtime button {
    background: var(--youtime-button-bg);
    color: var(--youtime-bg);
    border-radius: var(--youtime-border-radius);
    padding: 16px;
    border: none;
}
</style>
<section id="youtime" class="youtime">
    <main class="youtime">
        <h1 class="youtime header">Add a Note!</h1>
        <textarea class="youtime" placeholder="Add a note..."></textarea>
        <button id="youtime-save-btn" onmousedown="youtimeClose()">Save</button>
    </main>
</section>
`;

  document.body.prepend(div);
  const youtimeSaveBtn = document.querySelector("#youtime-save-btn");
  if (youtimeSaveBtn) {
    youtimeSaveBtn.addEventListener("mousedown", youtimeClose);
  }
}

function youtimeClose() {
  const youtimediv = document.querySelector("#youtime");
  if (youtimediv) {
    youtimediv.remove();
  }
}

main();
