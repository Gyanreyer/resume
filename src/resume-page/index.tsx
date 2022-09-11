import React from "react";
import { createRoot } from "react-dom/client";

import Resume from "./Resume";
// Make sure global styles are applied
import "./sharedStyles.css";

const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(<Resume />);
