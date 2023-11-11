import type { FC } from "react";
import type {
  MainFlowerType,
  UserType,
  WishItemType,
} from "../../../../../../@types";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../../hooks/useRedux";
import { useNotificationAPI } from "../../../../../../generic/notification";
import { useAxios } from "../../../../../../hooks/useAxios";
import { setAuthModalVisibility } from "../../../../../../redux/modalSlice";
import { setShoppingData } from "../../../../../../redux/shoppingSlice";

const Card: FC<MainFlowerType> = (props) => {
  const [params] = useSearchParams();
  const { _id, main_image, discount, price, title } = props;
  const auth = useAuthUser()() ?? { wishlist: [] };
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useReduxDispatch();
  const notifier = useNotificationAPI();
  const axios = useAxios();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const category: string = params.get("category") ?? "house-plants";
  const { data } = useReduxSelector((state) => state.shopping);

  const userUpdater = ({ shouldUpdate }: { shouldUpdate: object }) => {
    signIn({
      token: localStorage.getItem("token") ?? "",
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: {
        ...auth,
        ...shouldUpdate,
      },
    });
  };

  const foundData = auth.wishlist?.some(
    (value: WishItemType) => value?.flower_id === _id,
  );
  const isLiked = (id: string) => {
    if (foundData) {
      notifier("remove");
      userUpdater({
        shouldUpdate: {
          ...auth,
          wishlist: auth.wishlist?.filter(
            (value: WishItemType) => value?.flower_id !== id,
          ),
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
            ...Array(...auth?.wishlist),
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
  const addToCard = (item: MainFlowerType) => {
    const res = data.some((value) => value._id === item._id);
    if (!res) {
      dispatch(setShoppingData(props));
      notifier("addToCart");
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
          <div
            onClick={() => addToCard(props)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
          >
            <ShoppingCartOutlined />
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
            {foundData ? (
              <HeartFilled className="text-red-500" />
            ) : (
              <HeartOutlined />
            )}
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
