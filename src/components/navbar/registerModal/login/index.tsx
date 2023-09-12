import { Button, Divider, Input } from "antd";
import { type FC } from "react";
import { ScanOutlined } from "@ant-design/icons";

const Login: FC = () => {
  return (
    <div>
      <div className="text-center mb-[20px] mt-[30px]">
        Enter your username and password to login.
      </div>
      <div className="flex flex-col gap-[17px] items-center ">
        <Input
          className="w-[300px] border-green-400"
          placeholder="Enter your email address"
        />
        <Input.Password
          className="w-[300px] border-green-400"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <Button className="text-[#FFFFFF] bg-[#46A358] w-[300px] h-[45px] rounded-md hover:text-[red] mt-[40px]">
          Login
        </Button>
      </div>
      <div className="w-[300px] m-auto">
        <Divider className="w-[300px]">Or Login with</Divider>
      </div>
      <div className="flex flex-col gap-[20px] items-center pt-[8px]">
        <button className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center">
          <img
            src="https://flower-store.vercel.app/static/media/google.673c67d1582f1818bba6cea96f65e6c8.svg"
            alt=""
          />
          Login with Google
        </button>
        <button className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center">
          <img
            src="https://flower-store.vercel.app/static/media/face2.ae36d79d975ec73d7b0d02469ecd9d7f.svg"
            alt=""
          />
          Login with Facebook
        </button>
        <button className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center">
          <ScanOutlined />
          Login with QR code
        </button>
      </div>
    </div>
  );
};

export default Login;
