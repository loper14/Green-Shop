import { Empty } from "antd";
import type { FC } from "react";

const TrackOrder: FC = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Track your Orders</h2>
      <Empty
        description="No tracks yet...."
        style={{ fontSize: "19px", marginTop: "50px" }}
      />
    </div>
  );
};

export default TrackOrder;
