import React from "react";
import RelatedProducts from "../../pages/shop/relatedProducts";
import Footer from "../footer";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";

const ShoppingCard = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 h-[600px]">
      <div className="flex justify-center gap-20">
        <div className="w-[65%]">
          <div className=" pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
            <h3 className="w-[40%]">Products</h3>
            <h3 className="w-[20%]">Price</h3>
            <h3 className="w-[20%]">Quantity</h3>
            <h3 className="w-[20%]">Total</h3>
          </div>
          <Empty className="m-auto pt-14" />
          <button
            onClick={() => navigate("/")}
            className=" m-auto bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]"
          >
            LET&apos;S SHOP
          </button>
        </div>
        <div>
          <div className="font-bold pb-[11px] border-b border-[#46A35880]">
            Card Total
          </div>
          <div className="flex h-[40px] mt-[35px]">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className=" border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg"
            />
            <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-20 rounded-l-none">
              Apply
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
              <div>0$</div>
              <div>0$</div>
              <div>0$</div>
              <div className="text-[#46A358]">0$</div>
            </div>
          </div>
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
            Proceed to checkout
          </button>
          <h3 className="mt-[14px] text-center text-[#46A358] cursor-pointer">
            Continue shopping
          </h3>
        </div>
      </div>
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default ShoppingCard;
