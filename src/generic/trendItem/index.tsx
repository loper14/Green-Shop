import type { FC } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

interface Props {
  img: string;
  title: string;
  description: string;
}
const TrendItem: FC<Props> = (props) => {
  return (
    <div className="flex items-center">
      <img src={props.img} />
      <div className="">
        <h3 className=" w-[320px] text-right text-[#3D3D3D] text-[25px] uppercase font-bold">
          {props.title}
        </h3>
        <p className="w-[340px] text-[#727272] text-right mt-3">
          {props.description}
        </p>
        <button className="float-right w-[130px] mt-7 h-[35px] bg-[#46A358] rounded-md text-white ">
          Find more <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
};

export default TrendItem;
