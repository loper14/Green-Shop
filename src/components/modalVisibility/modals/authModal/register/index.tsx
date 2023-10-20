import type { FC } from "react";
import { Button, Divider, Form, Input, Modal } from "antd";
import { useAxios } from "../../../../../hooks/useAxios";
import { setAuthModalVisibility } from "../../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { useNotificationAPI } from "../../../../../generic/notification";
import { useSignIn } from "react-auth-kit";
import type { AuthResponseType } from "../../../../../@types";

interface RegisterFormField {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Register: FC = () => {
  const axios = useAxios();
  const notifier = useNotificationAPI();
  const dispatch = useReduxDispatch();
  const signIn = useSignIn();
  const onAuth = (e: RegisterFormField) => {
    if (e.confirm_password !== e.password) return;
    axios({
      url: "/user/sign-up",
      method: "POST",
      body: e,
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
        dispatch(setAuthModalVisibility({ loading: false, open: false }));
      })
      .catch((err) => {
        dispatch(setAuthModalVisibility({ loading: false, open: false }));
        notifier(err.response.status);
      });
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="text-center mb-[20px] mt-[30px]">
        Enter your email and password to register.
      </div>
      <Form onFinish={onAuth}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Name"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Please enter your surname!",
            },
          ]}
        >
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Surname"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email address!",
            },
          ]}
        >
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Email"
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
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Password"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please enter your confirm password!",
            },
          ]}
        >
          <Input
            className="  h-[40px] mt-[14px] border border-[#46A358] "
            placeholder="Confirm password"
            type="text"
          />
        </Form.Item>
        <button
          className="text-[#FFFFFF] bg-[#46A358] w-full h-[45px] rounded-md  mt-[20px]"
          type="submit"
        >
          Register
        </button>
      </Form>
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
