import injectHtml from "./injectHtml";
import { getCleanURL, getCurrentTime } from "./utils";
import { Timestamp } from "../types";

function youtimeClose() {
  const youtimediv = document.querySelector("#youtime");
  if (youtimediv) {
    youtimediv.remove();
  }
}

function main() {
  injectHtml();

  const youtimeSaveBtn: HTMLButtonElement | null =
    document.querySelector("#youtime-save-btn");
  const youtimeInput: HTMLTextAreaElement | null =
    document.querySelector("#youtime-input");

  if (youtimeSaveBtn) {
    youtimeSaveBtn.addEventListener("mousedown", () => {
      const timestamp: Timestamp = {
        url: getCleanURL()!,
        time: getCurrentTime()!,
        value: youtimeInput?.value!,
      };
      chrome.runtime.sendMessage({
        type: "save-timestamp",
        timestamp: timestamp,
      });
      youtimeClose();
    });
  }

  const textarea: HTMLTextAreaElement | null =
    document.querySelector("textarea.youtime");
  if (textarea) {
    textarea.focus();
  }
}

main();
