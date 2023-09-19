import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Icon
import "remixicon/fonts/remixicon.css";

// Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// My Styles
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
