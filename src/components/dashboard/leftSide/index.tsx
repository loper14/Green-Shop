import { useEffect, type FC, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { Slider } from "antd";

const LeftSide: FC = () => {
  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [active, setActive] = useState("House Plants");
  const axios = useAxios();
  const title_style: string =
    "text-[#3D3D3D] text-[18px] font-bold	leading-4 mb-[7px] pl-[18px] pt-[14px]";

  const changedValue = (e: any) => {
    setMin(e[0]);
    setMax(e[1]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "/flower/category",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          params: {
            access_token: "64f4b75bf8771ae62ff9821de",
          },
        });
        const data = response?.data;
        setData(data.data);
        console.log(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#FBFBFB] w-[310px] h-[1104px]">
      <div className={title_style}>Category</div>
      <div>
        {data.map((value: any) => {
          return (
            <div
              key={value._id}
              className={`flex cursor-pointer gap-[126px]  items-center pl-[30px] duration-[0.2s] hover:text-[#46A358]  text-[${
                active === value.title ? "#46A358" : "#3d3d3d"
              }] font-${active === value.title ? "bold" : "normal"} `}
              onClick={() => {
                setActive(value.title);
              }}
            >
              <div className=" text-[16px]  w-[105px] leading-10	">
                {value.title}
              </div>
              <div>({value.count})</div>
            </div>
          );
        })}
      </div>
      <div className={title_style}>Price range</div>
      <div className=" pl-[30px]">
        <Slider
          onChange={changedValue}
          max={1000}
          range
          // color="#46A358"
          defaultValue={[0, 4050]}
          className="text-[#46A358] w-[209px] ml-[25px] mt-[25px] "
        />
        <div className="flex gap-1">
          <div>Price:</div>
          <div className="text-[#46a358] font-bold">
            ${min} - ${max}
          </div>
        </div>
        <button className="bg-[#46A358] w-[90px] h-[35px] rounded-md text-[#FFFFFF] font-bold mt-[16px]">
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

export default LeftSide;
