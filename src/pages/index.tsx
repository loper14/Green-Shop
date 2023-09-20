import type { FC } from "react";
import HomeComponent from "../components/home";
import Blog from "../components/blog";
import Trends from "../components/trends";
import Footer from "../components/footer";
import Dashboard from "../components/dashboard";

const Home: FC = () => {
  return (
    <div>
      <HomeComponent />
      <Dashboard />
      <Trends />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
