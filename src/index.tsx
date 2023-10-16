import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./tools/provider";
import ModalVisibility from "./components/modalVisibility";
import Root from "./root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <Root />
    <ModalVisibility />
  </Provider>,
);
