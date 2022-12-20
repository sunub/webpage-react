import { useEffect, useRef } from "react";
import SearchSVG from "./Svg";

const Search = () => {
  const dialog = document.getElementById("input-dialog") as HTMLDialogElement;

  const buttonTrigger = () => {
    useEffect(() => {});
  };

  return (
    <div id="search">
      <dialog id="input-dialog">
        <form id="dialog-form" method="dialog">
          <header>
            <h1>Search</h1>
          </header>
          <article id="typing">
            <label htmlFor="text">typing your text</label>
            <input name="text" type="text"></input>
          </article>
          <footer id="search-trigger">
            <button autoFocus={true} id="send">
              send
            </button>
            <button id="close" onClick={() => {}}>
              close
            </button>
          </footer>
        </form>
      </dialog>
      <a id="search-button" onClick={() => {}}>
        <SearchSVG stroke="white" fill="white" />
        <h3>Search</h3>
      </a>
    </div>
  );
};

export default Search;
