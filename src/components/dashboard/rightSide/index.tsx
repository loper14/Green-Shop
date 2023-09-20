import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const RightSide = () => {
  return (
    <div>
      <div className="flex justify-between gap-[443px]">
        <div className="flex gap-[36px]">
          <div className="font-normal text-[#3D3D3D] cursor-pointer">
            All plants
          </div>
          <div className="font-normal text-[#3D3D3D] cursor-pointer">
            New arrivals
          </div>
          <div className="font-normal text-[#3D3D3D] cursor-pointer">Sale</div>
        </div>
        <div className="flex gap-[6px]">
          <div>Sort by:</div>
          <Select
            style={{ width: "200px", border: "none", marginBottom: "40px" }}
            defaultValue={"default"}
          >
            <Option value="default">Default</Option>
            <Option value="cheapest">Cheapest</Option>
            <Option value="most-expensive">Most expensive</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
