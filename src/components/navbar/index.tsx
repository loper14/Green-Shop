import type { FC } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "./siteMap";
import { setSiteMapModalVisibility } from "../../redux/modalSlice";
import { useReduxDispatch } from "../../hooks/useRedux";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();

  const icon_style: string = "cursor-pointer text-[20px]";
  return (
    <div className="w-[80%] m-auto flex justify-between h-[90px] items-center border-b border-[rgba(70, 163, 88, 0.50)]">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt=""
        />
      </div>
      <div className="flex gap-4 max-md:hidden">
        <h3 className="cursor-pointer text-16">Home</h3>
        <h3 className="cursor-pointer text-16">Blog</h3>
      </div>
      <div className="flex gap-[30px] items-center">
        <SearchOutlined className={icon_style} />
        <BellOutlined className={icon_style} />
        <ShoppingCartOutlined className={icon_style} />
        <button className="text-white w-[100px] h-[35px] cursor-pointer bg-[#46A358] flex items-center justify-center rounded-md gap-2 max-md:hidden ">
          <LoginOutlined /> Login
        </button>
        <MenuOutlined
          onClick={() => {
            dispatch(setSiteMapModalVisibility());
          }}
          className={`${icon_style} hidden max-md:flex`}
        />
      </div>
      <SiteMap />
    </div>
  );
};

export default Navbar;
