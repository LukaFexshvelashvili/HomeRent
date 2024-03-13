import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components.css";
import "./responsive.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="HomeRent">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
