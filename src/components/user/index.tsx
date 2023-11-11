import type { FC } from "react";
import { WechatOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import useQueryHandler from "../../hooks/useQuery";
import { useAxios } from "../../hooks/useAxios";

const User: FC = () => {
  const axios = useAxios();
  const items = [
    {
      key: "1",
      label: "About",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Products",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Posts",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Likees",
      children: "Content of Tab Pane 3",
    },
    {
      key: "5",
      label: "Flowers",
      children: "Content of Tab Pane 3",
    },
  ];
  axios({
    url: "/user/by_id",
    body: {
      _id: localStorage.getItem("userID"),
    },
    params: {
      access_token: "64f4b75bf8771ae62ff9821d",
    },
  }).then((res) => console.log(res));
  return (
    <div>
      <img
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
        alt=""
      />
      <div className="flex justify-between mt-[-40px]">
        <div className="flex items-end max-sm:flex-col max-sm:items-center">
          <div className="w-[150px] h-[150px] border-[5px] border-[#46A358] rounded-full flex justify-center items-center">
            <img
              className="rounded-full"
              src="http://res.cloudinary.com/dj28bsagl/image/upload/v1697633056/zrfl1cnjmwpsys4pmapx.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col ml-[15px] max-sm:items-center">
            <h2 className="text-[28px] font-bold">Shahriyor Hudoyorov</h2>
            <p className="font-thin">2 followers</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-[100px]">
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white py-[10px] px-[15px]">
            <WechatOutlined /> Start chat
          </button>
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white py-[10px] px-[15px]">
            <PlusCircleOutlined /> Follow
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <Tabs style={{ fontSize: "30px" }} defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default User;
