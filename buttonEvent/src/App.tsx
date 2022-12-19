import ReactDOM from "react-dom/client";
import Button from "./Button/Button";
import Search from "./Search/Search";
import Throw from "./ThrowMessage/Throw";

const App = (domElement: HTMLElement) => {
  const root = ReactDOM.createRoot(domElement);

  root.render(
    <div id="container">
      <h1 id="title">title</h1>
      <div id="button-container">
        <Button />
        <Throw />
        <Search />
      </div>
    </div>
  );
};

export default App;
