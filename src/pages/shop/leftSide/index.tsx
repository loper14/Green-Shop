import type { FC } from "react";
import type { MainFlowerType } from "../../../@types";
import type { FlowerCategoryType } from "../../../components/home/category/mainMapping/mapping";
import useQueryHandler from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import { Image } from "antd";

const ShopLeftSide: FC = () => {
  const { category, flower_id } = useParams();

  const { data }: FlowerCategoryType = useQueryHandler({
    queryKey: "shop",
    url: `/flower/category/${category}/${flower_id}`,
  });

  const data2 = [data];

  return (
    <div>
      {data2?.map((value: any) => {
        return (
          <div className="flex gap-8" key={value?._id}>
            <div className="flex flex-col gap-8">
              {value?.detailed_images.map((value: any, idx: any) => (
                <img
                  className="w-[100px] h-[100px] border-2 cursor-pointer duration-[0.3s]  hover:border-green-700 "
                  key={idx}
                  src={value}
                />
              ))}
            </div>
            <Image src={value?.main_image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ShopLeftSide;
