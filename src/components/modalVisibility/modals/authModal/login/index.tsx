import { Button, Divider, Form, Input } from "antd";
import { type FC } from "react";
import { ScanOutlined } from "@ant-design/icons";
import { useAxios } from "../../../../../hooks/useAxios";
import type { AuthResponseType } from "../../../../../@types";
import { useSignIn } from "react-auth-kit";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../../redux/modalSlice";

interface OnAuthType {
  email: string;
  password: string;
}

const Login: FC = () => {
  const signIn = useSignIn();
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const onAuth = async (e: OnAuthType) => {
    if (!e.email || !e.password) return;
    try {
      const { data }: { data: AuthResponseType } = await axios({
        url: "/user/sign-in",
        method: "POST",
        body: e,
        headers: {},
      });
      signIn({
        token: data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: data.data.user,
      });
      dispatch(setAuthModalVisibility({ loading: false, open: false }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="text-center mb-[20px] mt-[30px]">
        Enter your username and password to login.
      </div>
      <Form onFinish={onAuth}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="almamun_uxui@outlook.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            className="  h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="*********"
            type="password"
          />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>
        <button
          type="submit"
          className="w-full h-[45px] my-[27px] bg-[#46A358] text-white rounded-md"
        >
          Login
        </button>
      </Form>

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
