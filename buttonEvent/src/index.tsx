import React from "react-dom/client";
import "./style.css";

const root = React.createRoot(document.getElementById("root") as HTMLElement);

const too = "tata";

root.render(
  <div>
    <h1 className="title">Hello {too}</h1>
    <p>
      Some <br /> content {Date.now()}
    </p>
  </div>
);
