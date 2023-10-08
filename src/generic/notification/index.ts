import { notification } from "antd";

type NotifierStatusType = 409 | 200 | 201;

export const useNotificationAPI = () => {
  const notifier = (status?: NotifierStatusType) => {
    switch (status) {
      case 409:
        return notification.error({
          message: "User not found",
          description: "Email or password is wrong!",
        });
      case 200:
        return notification.success({
          message: "Successfully authenticated via Google!",
        });
      case 201:
        return notification.success({
          message: "Successfully",
          description: "Email successfully added to our daily newsletters.",
        });
      default:
        return notification.error({
          message: "Missing status",
        });
    }
  };
  return notifier;
};
