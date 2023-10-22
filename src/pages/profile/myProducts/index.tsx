import { Empty } from "antd";
import type { FC } from "react";

const MyProducts: FC = () => {
  return (
    <div>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white ml-auto px-[15px] py-[8px]">
        Add new
      </button>
      <div className="pb-[11px] border-b border-[#46A35880] flex font-medium">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[40%]">Total</h3>
      </div>
      <Empty
        description="No products yet..."
        style={{ fontSize: "19px", marginTop: "50px" }}
      />
    </div>
  );
};

export default MyProducts;
