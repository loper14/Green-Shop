import { Modal } from "antd";
import type { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setSiteMapModalVisibility } from "../../../redux/modalSlice";

const SiteMap: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((store) => store.modal);
  const dispatch = useReduxDispatch();
  const custom_link_style: string =
    "text-[1rem] font-normal leading-6 cursor-pointer ";
  const lint_hover_style: string =
    "hover:border-l-2 hover:border-[#46a358] hover:pl-[5px] hover:text-[#46a358] transition-colors duration-500";
  const lint_active_style: string =
    "border-l-[5px] border-[#46a358] pl-[5px] text-[#46a358]";
  return (
    <Modal
      open={siteMapModalVisibility}
      onCancel={() => {
        dispatch(setSiteMapModalVisibility());
      }}
      title="Site map"
      footer={false}
    >
      <div className="flex gap-4 flex-col mt-5">
        <h3 className={`  ${lint_active_style} ${custom_link_style}`}>Home</h3>
        <h3 className={` ${lint_hover_style} ${custom_link_style}`}>Blog</h3>
      </div>
      <button className="w-[80%] m-auto flex gap-3  rounded-md items-center justify-center bg-[#46a358] h-[49px] mt-[41px] text-white font-medium text-[16px] ">
        <LoginOutlined /> Login
      </button>
    </Modal>
  );
};

export default SiteMap;
