import type { FC } from "react";
import type { MainFlowerType, UserType } from "../../../../../../@types";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useReduxDispatch } from "../../../../../../hooks/useRedux";
import { useNotificationAPI } from "../../../../../../generic/notification";
import { useAxios } from "../../../../../../hooks/useAxios";
import { setAuthModalVisibility } from "../../../../../../redux/modalSlice";

const Card: FC<MainFlowerType> = ({
  _id,
  main_image,
  discount,
  price,
  title,
}) => {
  const [params] = useSearchParams();

  const auth: UserType = useAuthUser()() ?? {};
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useReduxDispatch();
  const notifier = useNotificationAPI();
  const axios = useAxios();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const category: string = params.get("category") ?? "house-plants";

  const userUpdater = ({ shouldUpdate }: { shouldUpdate: object }) => {
    signIn({
      token: localStorage.getItem("token") ?? "",
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: {
        ...auth,
        shouldUpdate,
      },
    });
  };

  const foundData = auth.wishlist?.some((value) => value.flower_id === _id);
  const isLiked = (id: string) => {
    if (foundData) {
      notifier("remove");
      userUpdater({
        shouldUpdate: {
          ...auth,
          wishlist: auth.wishlist?.filter((value) => value.flower_id !== id),
        },
      });

      axios({
        url: "/user/delete-wishlist",
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          access_token: "64f4b75bf8771ae62ff9821d",
        },
        body: {
          _id: id,
        },
      });
    } else {
      notifier("add");

      userUpdater({
        shouldUpdate: {
          ...auth,
          wishlist: [
            { ...auth?.wishlist },
            { flower_id: _id, route_path: category },
          ],
        },
      });

      axios({
        url: "/user/create-wishlist",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          access_token: "64f4b75bf8771ae62ff9821d",
        },
        body: {
          route_path: category,
          flower_id: id,
        },
      });
    }
  };

  return (
    <div className="w-[300px] h-[360px] " key={_id}>
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        {discount ? (
          <div className="w-[76px] h-[30px] bg-[#46A358] text-white px-[4px] py-[3px] absolute left-0 top-3 ">
            13% OFF
          </div>
        ) : (
          ""
        )}

        <img className="w-[80%] h-auto" src={main_image} alt="Image" />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <span
              role="img"
              aria-label="shopping-cart"
              className="anticon anticon-shopping-cart"
            >
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="shopping-cart"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
              </svg>
            </span>
          </div>
          <div
            onClick={() => {
              if (isAuthenticated()) {
                isLiked(_id);
              } else {
                dispatch(
                  setAuthModalVisibility({
                    loading: false,
                    open: true,
                  }),
                );
              }
            }}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
          >
            {foundData ? <HeartFilled /> : <HeartOutlined />}
          </div>
          <div
            onClick={() => navigate(`/shop/${category}/${_id}`)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
          >
            <span
              role="img"
              aria-label="search"
              className="anticon anticon-search"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="search"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <h1 className="font-medium cursor-pointer mt-[12px]">{title}</h1>
      <div className="text-[#46A358] font-bold ">${price}</div>
    </div>
  );
};

export default Card;
