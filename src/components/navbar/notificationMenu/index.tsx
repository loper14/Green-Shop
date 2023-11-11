import { Button, Empty, Popover } from "antd";
import type { FC } from "react";
import useQueryHandler from "../../../hooks/useQuery";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface NotificationMenuType {
  children: React.ReactElement;
}
interface NotificationStackType {
  type: string;
  message: string;
  user_id: string;
  time_stamp: number;
}

const NotificationMenu: FC<NotificationMenuType> = ({ children }) => {
  const navigate = useNavigate();
  const { data } = useQueryHandler({
    queryKey: "/notification",
    url: "/user/notification",
    params: {
      access_token: "64f4b75bf8771ae62ff9821d",
    },
  });
  console.log(data);
  const content = (
    <div>
      {data?.notification_stack.length > 0 ? (
        data?.notification_stack.map((value: NotificationStackType) => {
          return (
            <div key={value.user_id} className="flex gap-3 mb-2 w-full">
              <div className="rounded-full w-[35px] h-[35px] bg-[#46A358] text-white text-[16px] flex justify-center items-center">
                {value.type === "invitation_stack" ? (
                  <SendOutlined />
                ) : (
                  <UserOutlined />
                )}
              </div>
              <div>
                <div className="text-[16px] font-normal">
                  {value.type === "invitation_stack"
                    ? "Someone has sent an invitation!"
                    : "You have new follower!"}
                </div>
                <div className="flex justify-between  w-[250px] ">
                  <div
                    className="text-[#46A358] cursor-pointer"
                    onClick={() => {
                      navigate(`/user/${value.user_id}`);
                      localStorage.setItem("userID", value.user_id);
                    }}
                  >
                    Go to profile
                  </div>
                  <p>{new Date(value.time_stamp).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Empty description="No notification" />
      )}
    </div>
  );

  return (
    <Popover content={content} title="Notifications" trigger="click">
      {children}
    </Popover>
  );
};

export default NotificationMenu;
