import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import OtherApp from "./OtherApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (process.env.REACT_APP_TEST_ENV === "other") {
  root.render(
    <React.StrictMode>
      <OtherApp />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
