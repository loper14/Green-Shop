import type { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-[80%] m-auto flex  justify-around  ">
      <div>
        <div className="text-[#3D3D3D] text-[14px] uppercase mt-[80px]">
          WELCOME TO GREENSHOP
        </div>
        <div className=" w-[550px] text-[#3D3D3D] text-[70px] font-black leading-[70px] not-italic ">
          LET&apos;S LIVE IN A BETTER
          <div className="text-[#46A358] ">PLANET</div>
        </div>
        <p className="w-[557px] text-[14px] leading-[24px] font-normal ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="w-[140px] h-[40px] uppercase rounded-md bg-[#46A358] text-white text-[16px] font-bold mt-[44px] ">
          shop now
        </button>
      </div>
      <div className="flex items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt=""
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
