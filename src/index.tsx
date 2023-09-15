import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./tools/provider";
import Home from "./pages";
import ModalVisibility from "./components/modalVisibility";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <div className="w-[1400px] m-auto max-md:w-[550px]">
      <Home />
      <ModalVisibility />
    </div>
  </Provider>,
);
