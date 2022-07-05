import ReactDOM from "react-dom";
import { ReduxProvider } from "./redux";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.getElementById("root") as HTMLElement
);
