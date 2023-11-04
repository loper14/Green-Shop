import React from "react";
import RelatedProducts from "../../pages/shop/relatedProducts";
import Footer from "../footer";
import ProductMap from "./ProductMap";
import ProductInfo from "./ProductInfo";

const ShoppingCard = () => {
  return (
    <div className="pt-14 h-[600px]">
      <div className="flex justify-center gap-28">
        <ProductMap />
        <ProductInfo />
      </div>
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default ShoppingCard;
