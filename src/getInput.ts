const div = document.createElement("div");
div.innerHTML = `
  <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border-radius: 5px; z-index: 999; display: flex; flex-direction: column; align-items: center; gap: 12px;">
  <h1>Enter a note for the timestamp</h1>
      <input type="text" id="note" placeholder="Note">
  </div>
`;
document.body.appendChild(div);
