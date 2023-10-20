import React from "react";

const RelatedProducts = () => {
  return (
    <div className="mb-[30px]">
      <div className="font-bold text-[#46A358] border-b border-[#46A358] pb-[5px] mb-4">
        Related Products
      </div>
      <div className="flex gap-[30px] justify-center ">
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <div key={idx}>
              <div className="w-[250px] h-[255px] bg-[#fbfbfb] "></div>
              <h3 className="font-medium">Beach Spider Lily</h3>
              <p className="font-bold text-[#46A358]">$129.00</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
