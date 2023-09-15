import type { FC } from "react";
import HomeComponent from "../components/home";
import Blog from "../components/blog";
import Trends from "../components/trends";
import Footer from "../components/footer";

const Home: FC = () => {
  return (
    <div>
      <HomeComponent />
      <Trends />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
