import { useState, type FC } from "react";
import { useReduxSelector } from "../../../hooks/useRedux";
import Register from "./register";
import { Modal } from "antd";
import Login from "./login";
import { setRegisterModalVisibility } from "../../../redux/modalSlice";

const RegisterModal: FC = () => {
  const { registerModalVisibility } = useReduxSelector((store) => store.modal);
  const [activeSection, setActiveSection] = useState("register");

  return (
    <Modal
      open={registerModalVisibility}
      footer={false}
      onCancel={() => {
        setRegisterModalVisibility();
      }}
    >
      <div className="flex gap-[10px] justify-center pt-[30px]">
        <div
          className={`text-[#3D3D3D] text-[20px] cursor-pointer ${
            activeSection === "login" ? "text-[#46A358]" : ""
          }`}
          onClick={() => {
            setActiveSection("login");
          }}
        >
          Login
        </div>
        <div className="text-[18px]">|</div>
        <div
          className={`text-[#3D3D3D] text-[20px] cursor-pointer ${
            activeSection === "register" ? "text-[#46A358]" : ""
          }`}
          onClick={() => {
            setActiveSection("register");
          }}
        >
          Register
        </div>
      </div>
      {activeSection === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default RegisterModal;
