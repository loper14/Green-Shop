import type { FC } from "react";
import Navbar from "../navbar";
import Hero from "../hero";
import Category from "./category";
import DetailedFlower from "./category/mainMapping/detailedFlower";

const HomeComponent: FC = () => {
  return (
    <div>
      <Navbar />
      <DetailedFlower />
      <Hero />
      <Category />
    </div>
  );
};

export default HomeComponent;
