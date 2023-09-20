import type { FC } from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const Dashboard: FC = () => {
  return (
    <div className="w-[100%] flex mt-[46px] gap-[50px]">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Dashboard;
