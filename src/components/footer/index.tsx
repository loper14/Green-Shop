import type { FC } from "react";
import FooterCard from "../../generic/footerCard";
import { Button, Input, Space } from "antd";

const Footer: FC = () => {
  const footer_item_style: string =
    "text-[#3D3D3D] text-[14px] font-normal leading-8 cursor-pointer";
  const footer_h3_style: string =
    "text-[#3D3D3D] text-[18px] font-bold mb-[15px] leading-0 cursor-text";
  return (
    <div className="bg-[#FBFBFB] h-[640px]">
      <div className="flex gap-x-16 justify-center pt-[31px]">
        <div className="flex gap-x-16 ">
          <FooterCard
            title="Garden Care"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
          />
          <FooterCard
            title="Plant Renovation"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a"
          />
          <FooterCard
            title="Watering Graden"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
          />
        </div>
        <div>
          <div className="#3D3D3D text-[18px] font-bold">
            Would you like to join newsletters?
          </div>
          <Space.Compact className="my-5">
            <Input
              className="text-[#ACACAC] "
              defaultValue="enter your email address..."
            />
            <Button type="primary" className="bg-[#46A358]">
              Join
            </Button>
          </Space.Compact>
          <div className="text-[#727272] w-[354px] font-normal leading-6">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </div>
        </div>
      </div>
      <div
        className="h-[88px] bg-green-50 flex pl-[40px] items-center gap-x-24
       mt-[24px]"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt=""
        />
        <div className="flex justify-center items-center w-[230px] gap-[10px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=d600d0e4-aa9d-423d-8348-e3df90b195f3"
            alt=""
          />
          <div>70 West Buckingham Ave. Farmingdale, NY 11735</div>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381"
            alt=""
          />
          <div>contact@greenshop.com</div>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f"
            alt=""
          />
          <div>+88 01911 717 490</div>
        </div>
      </div>
      <div className="flex gap-[295px] pl-[47px] pt-[30px] ">
        <div className={footer_item_style}>
          <h3 className={footer_h3_style}>My Account</h3>
          <div>My account</div>
          <div>Address</div>
          <div>Wishlist</div>
        </div>
        <div className={footer_item_style}>
          <h3 className={footer_h3_style}>Categories</h3>
          <div>House plants</div>
          <div>Potter Plants</div>
          <div>Seeds</div>
          <div>Small plants</div>
          <div>Accessories</div>
        </div>
        <div>
          <h3 className={footer_h3_style}>Social media</h3>
          <div className="flex gap-[10px] mb-[15px]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
              alt=""
              className="border p-1 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5"
              alt=""
              className="border p-1 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835"
              alt=""
              className="border p-1 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7"
              alt=""
              className="border p-1 "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f"
              alt=""
              className="border p-1 "
            />
          </div>
          <h3 className={footer_h3_style}>We accept</h3>
          <div className="flex items-center gap-[10px] ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              alt=""
              className="w-[30px]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a"
              alt=""
              className="w-[30px]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2"
              alt=""
              className="w-[30px]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04"
              alt=""
              className="w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
