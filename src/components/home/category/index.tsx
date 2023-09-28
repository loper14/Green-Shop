import type { FC } from "react";
import Dashboard from "./dashboard";
import MainMapping from "./mainMapping";

const Category: FC = () => {
  return (
    <div className="w-[100%] flex mt-[46px] gap-[70px]">
      <Dashboard />
      <MainMapping />
    </div>
  );
};

export default Category;
