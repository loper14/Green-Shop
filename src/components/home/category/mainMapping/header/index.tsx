import { Select } from "antd";
import { useState, type FC } from "react";
import { useSearchParams } from "react-router-dom";

type TypeInterface = "all-plants" | "new-arrivals" | "sale";
type SortInterface = "default-sorting" | "the-cheapest" | "most-expensive";

const Header: FC = () => {
  const [active, setActive] = useState("all_plants");
  const [params, setParams] = useSearchParams();
  const type_param = (params.get("type") ?? "all-plants") as TypeInterface;
  const sort_param = (params.get("sort") ?? "default-sorting") as SortInterface;

  const setType = (type: TypeInterface) => {
    setParams({
      type,
    });
  };
  const setSort = (sort: SortInterface) => {
    setParams({
      sort,
    });
  };

  return (
    <div className="flex justify-between gap-[443px]">
      <div className="flex gap-[36px] h-[28px]">
        <div
          className={`font-normal duration-[0.2s] text-[${
            type_param === "all-plants" ? "#46A358" : "#3D3D3D"
          }] ${
            type_param === "all-plants" ? " border-b-2 border-[#46A358]" : ""
          }    cursor-pointer`}
          onClick={() => setType("all-plants")}
        >
          All plants
        </div>
        <div
          className={`font-normal duration-[0.2s] text-[${
            type_param === "new-arrivals" ? "#46A358" : "#3D3D3D"
          }] ${
            type_param === "new-arrivals" ? " border-b-2 border-[#46A358]" : ""
          }    cursor-pointer`}
          onClick={() => setType("new-arrivals")}
        >
          New arrivals
        </div>
        <div
          className={`font-normal duration-[0.2s] text-[${
            type_param === "sale" ? "#46A358" : "#3D3D3D"
          }] ${
            type_param === "sale" ? " border-b-2 border-[#46A358]" : ""
          }    cursor-pointer`}
          onClick={() => setType("sale")}
        >
          Sale
        </div>
      </div>
      <div className="flex gap-[6px]">
        <div>Sort by:</div>
        <Select
          style={{ width: "200px", border: "none", marginBottom: "40px" }}
          defaultValue={sort_param}
          onChange={(e) => setSort(e)}
        >
          <Select.Option value="default-sorting">Default sorting</Select.Option>
          <Select.Option value="the-cheapest">The cheapest</Select.Option>
          <Select.Option value="most-expensive">Most expensive</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default Header;
