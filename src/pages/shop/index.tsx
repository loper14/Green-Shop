import type { FC } from "react";
import { useParams } from "react-router-dom";
import ShopLeftSide from "./leftSide";
import ShopRightSide from "./rightSide";
import { useQuery, useQueryClient } from "react-query";
import useQueryHandler from "../../hooks/useQuery";
import type { FlowerCategoryType } from "../../components/home/category/mainMapping/mapping";
import ProductText from "./productText";
import RelatedProducts from "./relatedProducts";
import Footer from "../../components/footer";

const Shop: FC = () => {
  const { category, flower_id } = useParams();

  return (
    <div>
      <div className="flex pt-12 gap-36 justify-center">
        <ShopLeftSide />
        <ShopRightSide />
      </div>
      <ProductText />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Shop;
