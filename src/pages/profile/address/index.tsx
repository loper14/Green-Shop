import { Checkbox, Form, Input } from "antd";
import type { FC } from "react";
import { useAuthUser } from "react-auth-kit";

const Address: FC = () => {
  const auth = useAuthUser()() ?? { wishlist: [] };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium mb-2">Billing address</h3>
          <p>
            The following addresses will be used on the checkout page by
            default.
          </p>
        </div>
        <div className="font-bold text-[#46A358] cursor-pointer">Add</div>
      </div>
      <Form
        labelCol={{
          span: 30,
        }}
        wrapperCol={{
          span: 80,
        }}
        style={{
          maxWidth: 1200,
        }}
        initialValues={{
          name: auth.name,
          lastname: auth.surname,
          email: auth.email,
        }}
        size="large"
        layout="vertical"
        className=" flex w-full gap-[10px] pt-8 "
      >
        <div className="w-[50%]">
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your first name!",
              },
            ]}
            label="First name"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="country/region"
            rules={[
              {
                required: true,
                message: "Please enter your country / region!",
              },
            ]}
            label="Country / Region"
          >
            <Input placeholder="your country..." />
          </Form.Item>
          <Form.Item
            name="streed-address"
            rules={[
              {
                required: true,
                message: "Please enter your streed address!",
              },
            ]}
            label="Streed Address"
          >
            <Input placeholder="House number and street name" />
          </Form.Item>
          <Form.Item
            name="State"
            rules={[
              {
                required: true,
                message: "Please enter your state! ",
              },
            ]}
            label="State"
          >
            <Input placeholder="your state..." />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email! ",
              },
            ]}
            label="Email address"
          >
            <Input />
          </Form.Item>
        </div>
        <div className="w-[50%]">
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please enter your last name!",
              },
            ]}
            label="Last name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="town/city"
            rules={[
              {
                required: true,
                message: "Please enter your town / city!",
              },
            ]}
            label="Town / City"
          >
            <Input placeholder="your town..." />
          </Form.Item>
          <Form.Item name="streed-address" label="Extra address">
            <Input placeholder=" Appartment, suite, unit, etc. (optional)" />
          </Form.Item>
          <Form.Item name="zip" label="Zip">
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
          </Form.Item>

          <Form.Item
            name="phone-number"
            rules={[
              {
                required: true,
                message: "Please enter your phone number! ",
              },
            ]}
            label="Phone number "
          >
            <Input placeholder="your phone number..." />
          </Form.Item>
        </div>
      </Form>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px]">
        Save address
      </button>
      <div className="flex justify-between pt-12">
        <div>
          <h3 className="font-medium mb-2">Shipping address</h3>
          <p>You have not set up this type of address yet.</p>
        </div>
        <div>
          <div className="flex gap-2 ">
            <Checkbox />
            Same as billing address
          </div>
          <div className="font-bold text-[#46A358] cursor-pointer mt-2">
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
