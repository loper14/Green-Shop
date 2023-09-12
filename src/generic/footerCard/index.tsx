import type { FC } from "react";

interface FooterCardProps {
  img: string;
  title: string;
  description: string;
}

const FooterCard: FC<FooterCardProps> = (props) => {
  return (
    <div className="border-r  ">
      <img src={props.img} alt="" />
      <div className="text-[#3D3D3D] text-[17px] font-bold leading-4 py-4 ">
        {props.title}
      </div>
      <div className="text-[#727272]  w-[250px] pr-[15px]">
        {props.description}
      </div>
    </div>
  );
};

export default FooterCard;
