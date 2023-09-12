import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Provider from "./tools/provider";
import Trends from "./components/trends";
import Blog from "./components/blog";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider>
    <div className="w-[1400px] m-auto">
      <Navbar />
      <Hero />
      <Trends />
      <Blog />
      <Footer />
    </div>
  </Provider>,
);
