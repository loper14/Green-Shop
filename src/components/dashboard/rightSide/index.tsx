import { Select } from "antd";
import React, { useState } from "react";

const RightSide = () => {
  const [active, setActive] = useState("all_plants");
  return (
    <div>
      <div className="flex justify-between gap-[443px]">
        <div className="flex gap-[36px] h-[28px]">
          <div
            className={`font-normal duration-[0.2s] text-[${
              active === "all_plants" ? "#46A358" : "#3D3D3D"
            }] ${
              active === "all_plants" ? " border-b-2 border-[#46A358]" : ""
            }    cursor-pointer`}
            onClick={() => {
              setActive("all_plants");
            }}
          >
            All plants
          </div>
          <div
            className={`font-normal duration-[0.2s] text-[${
              active === "newArrivals" ? "#46A358" : "#3D3D3D"
            }] ${
              active === "newArrivals" ? " border-b-2 border-[#46A358]" : ""
            }    cursor-pointer`}
            onClick={() => {
              setActive("newArrivals");
            }}
          >
            New arrivals
          </div>
          <div
            className={`font-normal duration-[0.2s] text-[${
              active === "sale" ? "#46A358" : "#3D3D3D"
            }] ${
              active === "sale" ? " border-b-2 border-[#46A358]" : ""
            }    cursor-pointer`}
            onClick={() => {
              setActive("sale");
            }}
          >
            Sale
          </div>
        </div>
        <div className="flex gap-[6px]">
          <div>Sort by:</div>
          <Select
            style={{ width: "200px", border: "none", marginBottom: "40px" }}
            defaultValue={"default"}
          >
            <Select.Option value="default">Default</Select.Option>
            <Select.Option value="cheapest">The cheapest</Select.Option>
            <Select.Option value="most-expensive">Most expensive</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
