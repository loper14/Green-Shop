import { Carousel } from "antd";
import type { FC } from "react";
import HeroItem from "./heroItem";
import { hero_mock } from "../../utils";

const Hero: FC = () => {
  return (
    <Carousel autoplay>
      {hero_mock.map((value) => {
        return <HeroItem key={value.id} {...value} />;
      })}
    </Carousel>
  );
};

export default Hero;
