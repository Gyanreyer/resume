import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume";

// Make sure global styles are applied
import "./sharedStyles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
