import { Button, Divider, Form, Input } from "antd";
import { type FC } from "react";
import { ScanOutlined, LoadingOutlined } from "@ant-design/icons";
import { useAxios } from "../../../../../hooks/useAxios";
import type { AuthResponseType } from "../../../../../@types";
import { useSignIn } from "react-auth-kit";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setInProcessModalVisibility,
} from "../../../../../redux/modalSlice";
import { signInWithGoogle } from "../../../../../config/config";
import { useNotificationAPI } from "../../../../../generic/notification";

interface OnAuthType {
  email: string;
  password: string;
}

const Login: FC = () => {
  const notifier = useNotificationAPI();
  const signIn = useSignIn();
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const { authModalVisibility } = useReduxSelector((state) => state.modal);
  const onAuth = async (e: OnAuthType) => {
    if (!e.email || !e.password) return;
    dispatch(setAuthModalVisibility({ loading: true, open: true }));
    await axios({
      url: "/user/sign-in",
      method: "POST",
      body: e,
      headers: {},
    })
      .then((res) => {
        const { data }: AuthResponseType = res.data;
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });
        dispatch(setAuthModalVisibility({ loading: false, open: false }));
      })
      .catch((error) => {
        dispatch(setAuthModalVisibility({ loading: false, open: true }));
        notifier(error.response.status);
      });
  };

  const onAuthWithGoogle = async () => {
    dispatch(setAuthModalVisibility({ loading: false, open: false }));
    const result = await signInWithGoogle();
    dispatch(setInProcessModalVisibility());
    axios({
      url: "/user/sign-in/google",
      method: "POST",
      body: {
        email: result.user.email,
      },
    })
      .then((res) => {
        const { data }: AuthResponseType = res.data;
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });
        localStorage.setItem("token", data.token);
        dispatch(setInProcessModalVisibility());
        notifier(200);
      })
      .catch((error) => {
        dispatch(setInProcessModalVisibility());
        notifier(error.response.status);
      });
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
          {authModalVisibility.loading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>

      <div className="w-[300px] m-auto">
        <Divider className="w-[300px]">Or Login with</Divider>
      </div>
      <div className="flex flex-col gap-[20px] items-center pt-[8px]">
        <button
          onClick={() => onAuthWithGoogle()}
          className="flex gap-[15px] border rounded-md border-[#EAEAEA] w-[300px] h-[40px] items-center justify-center"
        >
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
