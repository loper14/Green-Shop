import type { FC } from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const DetailedFlower: FC = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="text-[grey] cursor-pointer">Home</div>
        <div className="text-[grey]">/</div>
        <div>Shop</div>
      </div>
      <div className="flex">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default DetailedFlower;
