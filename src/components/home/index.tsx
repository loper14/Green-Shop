import type { FC } from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import Category from "./category";

const HomeComponent: FC = () => {
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
};

export default HomeComponent;
