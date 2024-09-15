import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { store } from "./features/store.js";
import { Provider } from "react-redux";
import Spinner from "./components/Spinner.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
