import { useRef, type FC, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import type { CouponType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/useRedux";
import { LoadingOutlined } from "@ant-design/icons";

const ProductInfo: FC = () => {
  const couponRef = useRef<HTMLInputElement>(null);
  const axios = useAxios();
  const [loading, setLoading] = useState<boolean>(false);

  const { data } = useReduxSelector((state) => state.shopping);
  const total = data.reduce(
    (previousValue, currentValue) =>
      currentValue.price * currentValue.count + previousValue,
    0,
  );

  const handleCoupon = async () => {
    const value = couponRef.current?.value;
    if (!value) return;
    setLoading(true);
    const { data }: { data: CouponType } = await axios({
      url: "/features/coupon",
      params: {
        coupon_code: value,
      },
    });
    setLoading(false);
  };

  return (
    <div>
      <div className="font-bold pb-[11px] border-b border-[#46A35880]">
        Card Total
      </div>
      <div className="flex h-[40px] mt-[35px]">
        <input
          ref={couponRef}
          type="text"
          placeholder="Enter coupon code here..."
          className=" border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg"
        />
        <button
          onClick={handleCoupon}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-20 rounded-l-none"
        >
          {loading ? <LoadingOutlined /> : "Apply"}
        </button>
      </div>
      <div className="flex justify-between pt-3 ">
        <div className="flex flex-col gap-3">
          <div className="text-[grey]">Subtotal:</div>
          <div className="text-[grey]">Coupon discount:</div>
          <div className="text-[grey]">Shiping:</div>
          <div>Total:</div>
        </div>
        <div className="flex flex-col gap-3">
          <div>${total.toFixed(2)}</div>
          <div>- $(0.00)</div>
          <div>$16</div>
          <div className="text-[#46A358]">${total.toFixed(2)}</div>
        </div>
      </div>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
        Proceed to checkout
      </button>
      <h3 className="mt-[14px] text-center text-[#46A358] cursor-pointer">
        Continue shopping
      </h3>
    </div>
  );
};

export default ProductInfo;
