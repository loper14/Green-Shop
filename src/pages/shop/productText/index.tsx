import { useState, type FC } from "react";
import { useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQuery";
import type { FlowerCategoryType } from "../../../components/home/category/mainMapping/mapping";

const ProductText: FC = () => {
  const { category, flower_id } = useParams();
  const [activeSection, setActiveSection] = useState("product_description");

  const { data }: FlowerCategoryType = useQueryHandler({
    queryKey: "shop",
    url: `/flower/category/${category}/${flower_id}`,
  });

  const data2 = [data];

  return (
    <div className="h-[500px] ">
      <div className="flex gap-4 cursor-pointer border-b border-[#46A358] pb-[5px] mb-4">
        <h3
          className={`hover:text-[#46A358] font-medium duration-[0.3s] text-[${
            activeSection === "product_description" ? "#46A358" : ""
          }] `}
          onClick={() => setActiveSection("product_description")}
        >
          Product description
        </h3>
        <h3
          className={`hover:text-[#46A358] font-medium duration-[0.3s] text-[${
            activeSection === "review" ? "#46A358" : ""
          }] `}
          onClick={() => setActiveSection("review")}
        >
          Review
        </h3>
      </div>
      <div>
        {activeSection === "product_description"
          ? data2.map((value: any) => value?.description)
          : "Reviews"}
      </div>
    </div>
  );
};

export default ProductText;
