import type { FC } from "react";
import {
  LoginOutlined,
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "../modalVisibility/modals/siteMap";
import {
  setAuthModalVisibility,
  setSiteMapModalVisibility,
} from "../../redux/modalSlice";
import { useReduxDispatch } from "../../hooks/useRedux";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import type { UserType } from "../../@types";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  const isAuthed = useIsAuthenticated()();
  const auth: UserType = useAuthUser()() ?? {};
  const navigate = useNavigate();
  const { category, flower_id } = useParams();

  const icon_style: string = "cursor-pointer text-[20px]";
  return (
    <div className="w-[90%] m-auto">
      <div className=" flex justify-between h-[90px] items-center border-b border-[rgba(70, 163, 88, 0.50)] max-[1500px]:justify-around">
        <div className=" cursor-pointer " onClick={() => navigate("/")}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex gap-4 max-md:hidden">
          <h3 className="cursor-pointer text-16 ">Home</h3>
          <h3 className="cursor-pointer text-16">Blog</h3>
        </div>
        <div className="flex gap-[30px] items-center">
          <SearchOutlined className={icon_style} />
          <BellOutlined className={icon_style} />
          <ShoppingCartOutlined
            onClick={() => navigate("/shopping-card")}
            className={icon_style}
          />
          <button
            onClick={() => {
              dispatch(setAuthModalVisibility({ loading: false, open: true }));
            }}
            className="text-white w-[100px] h-[35px] cursor-pointer bg-[#46A358] flex items-center justify-center rounded-md gap-2 max-md:hidden "
          >
            {isAuthed ? (
              `${String(auth.name)}`
            ) : (
              <>
                <LoginOutlined /> Login
              </>
            )}
          </button>
          <MenuOutlined
            onClick={() => {
              dispatch(setSiteMapModalVisibility());
            }}
            className={`${icon_style} hidden max-md:flex`}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
