import { ButtonHTMLAttributes, HTMLAttributes, useState } from "react";

const Search = () => {
  const dialog = document.getElementById("input-dialog") as HTMLDialogElement;
  const button = document.getElementById("search-button") as HTMLButtonElement;
  const [modalState, setModal] = useState(() => {
    const buttonData: string | null = button.getAttribute("data-modal");
    return buttonData;
  });

  const modalTrigger = (dialog: HTMLDialogElement) => {
    if (modalState === "true") {
      return dialog.showModal();
    }

    if (modalState === "false") {
      return dialog.show();
    }

    return dialog.close();
  };

  return (
    <div id="search">
      <dialog id="input-dialog">
        <form method="dialog">
          <div id="typing">
            <label htmlFor="text">typing your text</label>
            <input name="text" type="text" required={true}></input>
          </div>
          <button>send</button>
          <button onClick={() => {}}>close</button>
        </form>
      </dialog>
      <button
        onClick={() => {
          modalTrigger(dialog);
        }}
        id="search-button"
        data-modal="true"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
