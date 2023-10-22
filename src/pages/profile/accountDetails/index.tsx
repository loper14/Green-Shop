import { Button, Form, Input, Upload } from "antd";
import type { FC } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useAuthUser } from "react-auth-kit";

const AccountDetails: FC = () => {
  const auth = useAuthUser()() ?? { wishlist: [] };

  return (
    <div className="">
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 30,
        }}
        style={{
          maxWidth: 1200,
        }}
        layout="vertical"
        initialValues={{
          name: auth.name,
          lastname: auth.surname,
          email: auth.email,
        }}
        className=" w-full flex justify-center gap-[100px] "
      >
        <div className="w-[50%]">
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Type your first name!",
              },
            ]}
            label="First name"
          >
            <Input className="h-[40px] mt-[14px] " type="text" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Type your email!",
              },
            ]}
            label="Email address"
          >
            <Input className="h-[40px] mt-[14px] " type="text" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Type your username!",
              },
            ]}
            label="Username"
          >
            <Input className="h-[40px] mt-[14px] " type="text" />
          </Form.Item>
        </div>
        <div className="w-[50%]">
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Type your last name!",
              },
            ]}
            label="Last name"
            className="flex flex-col "
          >
            <Input className="h-[40px] mt-[14px] " type="text" />
          </Form.Item>
          <Form.Item
            name="phone-number"
            rules={[
              {
                required: true,
                message: "Type your phone number!",
              },
            ]}
            label="Phone number"
          >
            <Input className="h-[40px] mt-[14px] " type="text" />
          </Form.Item>
          <Form.Item name="profile-photo" label="Profile photo">
            <Upload>
              <Button style={{ marginTop: "15px" }} icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </div>
      </Form>
      <button className=" w-[135px]  bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]">
        Save changes
      </button>
    </div>
  );
};

export default AccountDetails;
