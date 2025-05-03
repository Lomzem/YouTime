import { TimestampNote } from "../types";
import injectHtml from "./injectHtml";
import { getCleanURL, getCurrentTime } from "./utils";

export interface SaveTimestampMessage {
  type: "save-timestamp";
  url: string;
  timestampNote: TimestampNote;
}

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

  const youtimeCancelBtn: HTMLButtonElement | null = document.querySelector(
    "#youtime-cancel-btn",
  );

  if (youtimeCancelBtn) {
    youtimeCancelBtn.addEventListener("mousedown", () => {
      youtimeClose();
    });
  }

  if (youtimeSaveBtn) {
    youtimeSaveBtn.addEventListener("mousedown", () => {
      const message: SaveTimestampMessage = {
        type: "save-timestamp",
        url: getCleanURL()!,
        timestampNote: {
          note: youtimeInput?.value!,
          time: getCurrentTime()!,
        },
      };
      chrome.runtime.sendMessage(message);
      youtimeClose();
    });
  }

  const textarea: HTMLTextAreaElement | null =
    document.querySelector("#youtime textarea");
  if (textarea) {
    textarea.focus();
  }
}

main();
