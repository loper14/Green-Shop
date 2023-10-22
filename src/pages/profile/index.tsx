import type { FC } from "react";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import AccountDetails from "./accountDetails";
import { useSignOut } from "react-auth-kit";
import { Modal } from "antd";
import MyProducts from "./myProducts";
import Address from "./address";
import Wishlist from "./wishlist";
import TrackOrder from "./trackOrder";
const { confirm } = Modal;

const Profile: FC = () => {
  const showConfirm = () => {
    confirm({
      okText: "I'm sure",
      title: "Do you want to logout?",
      icon: <ExclamationCircleFilled />,
      content: "Please make sure, bacause this action cannot be undone!",
      okButtonProps: {
        danger: true,
      },
      onOk() {
        signOut();
        navigate("/");
      },
    });
  };

  const signOut = useSignOut();
  const { profile_section } = useParams();
  const item_style: string =
    " w-[170px] h-[40px] flex gap-3 cursor-pointer duration-[0.2s] items-center pl-[5px]  hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold";
  const navigate = useNavigate();
  const active_style: string =
    "border-l-[5px] border-[#46A358] text-[#46A358] text-bold";
  return (
    <div className="w-full ">
      <div className="flex justify-center pt-[60px] gap-28 mb-14 ">
        <div>
          <h2 className="font-bold text-[20px] mb-5">My account</h2>
          <div className=" flex flex-col gap-4 font-medium text-base">
            <div
              onClick={() => navigate("/profile/account-details")}
              className={` ${
                profile_section === "account-details" ? active_style : ""
              } ${item_style} `}
            >
              <UserOutlined className="text-[20px]" /> Account details
            </div>
            <div
              onClick={() => navigate("/profile/my-products")}
              className={` ${
                profile_section === "my-products" ? active_style : ""
              } ${item_style} `}
            >
              <ShoppingOutlined className="text-[20px]" /> My products
            </div>
            <div
              onClick={() => navigate("/profile/address")}
              className={` ${
                profile_section === "address" ? active_style : ""
              } ${item_style} `}
            >
              <EnvironmentOutlined className="text-[20px]" /> Address
            </div>
            <div
              onClick={() => navigate("/profile/wishlist")}
              className={` ${
                profile_section === "wishlist" ? active_style : ""
              } ${item_style} `}
            >
              <HeartOutlined className="text-[20px]" /> Wishlist
            </div>
            <div
              onClick={() => navigate("/profile/track-order")}
              className={` ${
                profile_section === "track-order" ? active_style : ""
              } ${item_style} `}
            >
              <OrderedListOutlined className="text-[20px]" /> Track order
            </div>
          </div>
          <div className=" mt-10 border-b-[2px]"> </div>
          <div
            onClick={() => showConfirm()}
            className="text-red-600 font-medium flex gap-3 cursor-pointer mt-[28px]"
          >
            <LogoutOutlined /> Log out
          </div>
        </div>
        <div className="w-[70%] ">
          {profile_section === "account-details" ? (
            <AccountDetails />
          ) : profile_section === "my-products" ? (
            <MyProducts />
          ) : profile_section === "address" ? (
            <Address />
          ) : profile_section === "wishlist" ? (
            <Wishlist />
          ) : (
            <TrackOrder />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
