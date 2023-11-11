import type { FC } from "react";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { DeleteOutlined } from "@ant-design/icons";
import {
  decrementCountOfProduct,
  deleteProduct,
  incrementCountOfProduct,
} from "../../../redux/shoppingSlice";
import { useNotificationAPI } from "../../../generic/notification";

const ProductMap: FC = () => {
  const { data } = useReduxSelector((state) => state.shopping);
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const notifier = useNotificationAPI();
  return (
    <div className="w-[70%]">
      <div className=" pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      {data.length > 0 ? (
        data.map((value) => {
          return (
            <div key={value._id}>
              <div className="bg-[#FBFBFB] h-[70px] w-full flex items-center mt-4">
                <div className="w-[40%] flex items-center gap-2">
                  <img
                    className="w-[70px] h-[70px]"
                    src={value.main_image}
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium">{value.title}</h2>
                    <div className="font-light text-[14px]">
                      SKU: {value._id}
                    </div>
                  </div>
                </div>
                <div className="w-[20%] flex items-center text-[#727272]">
                  ${value.price}
                </div>
                <div className="flex gap-28">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        if (value.count > 0) {
                          dispatch(decrementCountOfProduct(value._id));
                        }
                      }}
                      className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
                    >
                      -
                    </button>
                    <h3>{value.count}</h3>
                    <button
                      onClick={() =>
                        dispatch(incrementCountOfProduct(value._id))
                      }
                      className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
                    >
                      +
                    </button>
                  </div>
                  <div className="gap-20 flex items-center justify-between pr-[10px]">
                    <div className="w-[90px]">
                      ${(value.count * value.price).toFixed(2)}
                    </div>
                    <DeleteOutlined
                      onClick={() => {
                        notifier("removeFromCart");
                        dispatch(deleteProduct(value._id));
                      }}
                      style={{ cursor: "pointer", width: "30px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <Empty className="m-auto pt-14" />
          <button
            onClick={() => navigate("/")}
            className=" m-auto bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]"
          >
            LET&apos;S SHOP
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductMap;
