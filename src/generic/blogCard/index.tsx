import type { FC } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

interface CardProps {
  img: string;
  cardTime: string;
  title: string;
  description: string;
}

const BlogCard: FC<CardProps> = (props) => {
  return (
    <div className="bg-[#FBFBFB] h-[350px] ">
      <img src={props.img} alt="" />
      <div className="text-[#46A358] text-[14px] font-medium  pl-2">
        {props.cardTime}
      </div>
      <div className="text-[#3D3D3D] text-[20px] font-bold w-[210px] pl-2 ">
        {props.title}
      </div>
      <div className="text-[#727272] text-[14px] font-normal w-[242px] pl-2 ">
        {props.description}
      </div>
      <button className="text-[#3D3D3D] text-[14px] font-medium  pl-2 mt-4 duration-1000 hover:text-[#46A358]">
        Read more <ArrowRightOutlined />
      </button>
    </div>
  );
};

export default BlogCard;
