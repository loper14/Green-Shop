import type { FC } from "react";
import { Button, Divider, Input, Modal } from "antd";

const Register: FC = () => {
  return (
    <div>
      <div className="text-center mb-[20px] mt-[30px]">
        Enter your email and password to register.
      </div>
      <div className="flex flex-col gap-[17px] items-center ">
        <Input className="w-[300px] border-green-400" placeholder="Name" />
        <Input className="w-[300px] border-green-400" placeholder="Surname" />
        <Input
          className="w-[300px] border-green-400"
          placeholder="Enter your email address"
        />
        <Input.Password
          className="w-[300px] border-green-400"
          placeholder="Enter your password"
        />
        <Input.Password
          className="w-[300px] border-green-400"
          placeholder="Confirm your password"
        />
      </div>
      <div className="flex justify-center">
        <Button className="text-[#FFFFFF] bg-[#46A358] w-[300px] h-[45px] rounded-md hover:text-[red] mt-[40px]">
          Register
        </Button>
      </div>
      <div className="w-[300px] m-auto">
        <Divider className="w-[300px]">Or register with</Divider>
      </div>
      <div className="flex flex-col gap-[20px] items-center pt-[8px]">
        <button className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center">
          <img
            src="https://flower-store.vercel.app/static/media/google.673c67d1582f1818bba6cea96f65e6c8.svg"
            alt=""
          />
          Continue with Google
        </button>
        <button className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center">
          <img
            src="https://flower-store.vercel.app/static/media/face2.ae36d79d975ec73d7b0d02469ecd9d7f.svg"
            alt=""
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
