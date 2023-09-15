import type { FC } from "react";
import Navbar from "../navbar";
import Hero from "../hero";

const HomeComponent: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomeComponent;
