import type { FC } from "react";
import type { HeroItemType } from "../../../@types";

const HeroItem: FC<HeroItemType> = ({
  id,
  title,
  big_img_url,
  small_img_url,
  button_text,
}) => {
  return (
    <div className="flex  justify-around max-[1500px]:justify-center">
      <div className="flex-[2] ml-[40px]">
        <div className="text-[#3D3D3D] text-[14px] uppercase mt-[80px]">
          WELCOME TO GREENSHOP
        </div>
        <div className=" w-[550px] text-[#3D3D3D] text-[70px] font-black leading-[70px] not-italic ">
          {title}
          <div className="text-[#46A358] ">PLANET</div>
        </div>
        <p className="w-[557px] text-[14px] leading-[24px] font-normal last:text-[red] ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="w-[140px] h-[40px] uppercase rounded-md bg-[#46A358] text-white text-[16px] font-bold mt-[44px] ">
          {button_text}
        </button>
      </div>
      <div className="flex items-center justify-center flex-[1] relative">
        <img
          className="absolute bottom-1 left-[5px]"
          src={small_img_url}
          alt=""
        />
        <img src={big_img_url} alt="" className="h-[450px]" />
      </div>
    </div>
  );
};

export default HeroItem;
