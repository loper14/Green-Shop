import type { FC } from "react";
import BlogCard from "../../generic/blogCard";

const Blog: FC = () => {
  return (
    <div>
      <h2 className="text-[#3D3D3D] text-[30px] font-bold text-center ">
        Our Blog Posts
      </h2>
      <p className="text-[#727272] text-center text-[14px] font-normal mb-7">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="flex gap-x-11 justify-center">
        <BlogCard
          img="https://flower-store.vercel.app/static/media/post-img1.7c11d2d4edcde1eb6152.png"
          cardTime="September 12 I Read in 6 minutes"
          title="Cactus & Succulent Care Tips"
          description="Cacti are succulents are easy care plants for any home or patio.  "
        />
        <BlogCard
          img="https://flower-store.vercel.app/static/media/post-img2.9f4de20ea3b506355cd4.png"
          cardTime="September 13 I Read in 2 minutes"
          title="Top 10 Succulents forYour Home"
          description="Best in hanging baskets. Prefers medium to high light. "
        />
        <BlogCard
          img="https://flower-store.vercel.app/static/media/post-img3.7eb00152b8af02bf2ca8.png"
          cardTime="September 15 I Read in 3 minutes"
          title="Cacti & Succulent Care Tips"
          description="Cacti and succulents thrive in containers and because most are.. "
        />
        <BlogCard
          img="https://flower-store.vercel.app/static/media/post-img4.9b67cb74ddf7e40188bd.png"
          cardTime="September 15 I Read in 2 minutes"
          title="Best Houseplants Room by Room"
          description="The benefits of houseplants are endless. In addition to.. "
        />
      </div>
    </div>
  );
};

export default Blog;
