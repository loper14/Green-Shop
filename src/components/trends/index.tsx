import type { FC } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import TrendItem from "../../generic/trendItem";

const Trends: FC = () => {
  return (
    <div className="flex gap-5 justify-center h-[459px]">
      <TrendItem
        img="https://flower-store.vercel.app/static/media/flower5.a7284acc967a5aeb230c.png"
        title="Summer cactus & succulents"
        description="We are an online plant shop offering a wide range of cheap and trendy plants"
      />
      <TrendItem
        img="https://flower-store.vercel.app/static/media/flower3.7972a9a2536f85da916e.png"
        title="Styling trends & much more"
        description="We are an online plant shop offering a wide range of cheap and trendy plants"
      />
    </div>
  );
};

export default Trends;
