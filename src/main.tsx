import "./css/colors.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import "./css/components.css";
import "./css/responsive.css";
import { StrictMode } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
