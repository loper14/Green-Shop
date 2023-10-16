import type { FC } from "react";
import { useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQuery";
import type { FlowerCategoryType } from "../../../components/home/category/mainMapping/mapping";
import { Rate } from "antd";

const ShopRightSide: FC = () => {
  const { category, flower_id } = useParams();

  const { data }: FlowerCategoryType = useQueryHandler({
    queryKey: "shop",
    url: `/flower/category/${category}/${flower_id}`,
  });

  const data2 = [data];
  console.log(data2);
  const sizeBtnStyle: string =
    "w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors";

  return (
    <div>
      {data2?.map((value: any) => {
        return (
          <div key={value?._id}>
            <div className="flex gap-[185px] border-b border-[#46A35880] pb-3">
              <div className="flex flex-col">
                <div className="font-bold text-[28px]">{value?.title}</div>
                <div className="font-bold text-[#46A358] text-[22px]">
                  ${value?.price}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Rate />
                <div>{value?.views} Customer review</div>
              </div>
            </div>
            <div className="font-medium text-[20px] mt-[12px]">
              Short description:
            </div>
            <div className="font-light w-[600px] mt-[10px]">
              {value?.short_description}
            </div>
            <div className="font-medium text-[20px] mt-[12px]">Size:</div>
            <div className="flex gap-3 mt-[12px]">
              <button className={sizeBtnStyle}>S</button>
              <button className={sizeBtnStyle}>M</button>
              <button className={sizeBtnStyle}>L</button>
              <button className={sizeBtnStyle}>XL</button>
            </div>
            <div className="flex gap-3 mt-[12px]">
              <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                -
              </button>
              <h3 className="font-medium text-[20px]">0</h3>
              <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                +
              </button>
            </div>
            <div className="flex mt-[10px] gap-3">
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
                BUY NOW
              </button>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px] border border-[#46A358] bg-transparent">
                <p className="text-black">ADD TO CARD</p>
              </button>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px] ">
                <span
                  role="img"
                  aria-label="heart"
                  className="anticon anticon-heart text-[#000]"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="heart"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex gap-2 pt-3">
              <div className=" ">
                <h3 className="text-[grey] text-[14px] leading-8">SKU:</h3>
                <h3 className="text-[grey] text-[14px] leading-8">
                  Categories:
                </h3>
                <h3 className="text-[grey] text-[14px] leading-8">Tags:</h3>
              </div>
              <div>
                <p className="text-[black] text-[14px] leading-8">
                  {flower_id}
                </p>
                <p className="text-[black] text-[14px] leading-8">
                  {category?.toUpperCase()}
                </p>
                <p className="text-[black] text-[14px] leading-8">
                  Home, Garden, Plants
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopRightSide;
