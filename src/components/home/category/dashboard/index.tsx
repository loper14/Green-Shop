import { useEffect, type FC, useState } from "react";
import { useAxios } from "../../../../hooks/useAxios";
import { Slider } from "antd";
import { useQuery } from "react-query";
import { UseLoader } from "../../../../generic/loaders";
import useQueryHandler from "../../../../hooks/useQuery";
import { setCategoryName } from "../../../../redux/flowerSlice";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { useSearchParams } from "react-router-dom";

interface DashboardItemType {
  id: string;
  title: string;
  count: string;
  created_by: string;
  created_at: string;
  route_path: string;
}

const Dashboard: FC = () => {
  const { category_loader } = UseLoader();
  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 1000]);
  const title_style: string =
    "text-[#3D3D3D] text-[18px] font-bold	leading-4 mb-[7px] pl-[18px] pt-[14px]";
  const [params, setParams] = useSearchParams();

  const { data, isLoading, isError } = useQueryHandler({
    queryKey: "/categories",
    url: "/flower/category",
  });

  const categoryParams = (route_path: string) => {
    setParams({
      category: route_path,
    });
  };

  const ranging = () => {
    setParams({
      range_min: rangeValue[0].toString(),
      range_max: rangeValue[1].toString(),
    });
  };

  return (
    <div className="bg-[#FBFBFB] w-[310px] h-[1104px]">
      <div className={title_style}>Category</div>
      <div>
        {isLoading || isError
          ? category_loader()
          : data?.map((value: DashboardItemType) => {
              return (
                <div
                  key={value.id}
                  className={`flex cursor-pointer gap-[126px]  items-center pl-[30px] duration-[0.2s] hover:text-[#46A358]  text-[${
                    params.get("category") === value.route_path
                      ? "#46A358"
                      : "#3d3d3d"
                  }] font-${
                    params.get("category") === value.route_path
                      ? "bold"
                      : "normal"
                  } group`}
                  onClick={() => categoryParams(value.route_path)}
                >
                  <div className=" text-[16px]  w-[105px] leading-10 group-hover:text-[#46A358]	">
                    {value.title}
                  </div>
                  <div className="group-hover:text-[#46A358]">
                    ({value.count})
                  </div>
                </div>
              );
            })}
      </div>
      <div className={title_style}>Price range</div>
      <div className=" pl-[30px]">
        <Slider
          onChange={(e) => {
            setRangeValue(e);
          }}
          max={1000}
          range
          // color="#46A358"
          defaultValue={[0, 4050]}
          className="text-[#46A358] w-[209px] ml-[25px] mt-[25px] "
        />
        <div className="flex gap-1">
          <div>Price:</div>
          <div className="text-[#46a358] font-bold">
            ${rangeValue[0]} - ${rangeValue[1]}
          </div>
        </div>
        <button
          onClick={ranging}
          className="bg-[#46A358] w-[90px] h-[35px] rounded-md text-[#FFFFFF] font-bold mt-[16px]"
        >
          Filter
        </button>
      </div>
      <img
        src="https://flower-store.vercel.app/static/media/sale.6a06d1d09abfbb300bb8.png"
        alt=""
        className="mt-[50px]"
      />
    </div>
  );
};

export default Dashboard;
