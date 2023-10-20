import type { FC } from "react";
import useQueryHandler from "../../../../../hooks/useQuery";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import type { MainFlowerType, UserType } from "../../../../../@types";
import { UseLoader } from "../../../../../generic/loaders";
import { useAuthUser, useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../../redux/modalSlice";
import { useNotificationAPI } from "../../../../../generic/notification";
import { useAxios } from "../../../../../hooks/useAxios";
import Card from "./card";

export interface FlowerCategoryType {
  data?: MainFlowerType[];
  isLoading: boolean;
  isError: boolean;
}

const Mapping: FC = () => {
  const [params] = useSearchParams();
  const { main_card_skeleton } = UseLoader();
  const category: string = params.get("category") ?? "house-plants";
  const activeSection: string = params.get("type") ?? "all-plants";
  const sort: string = params.get("sort") ?? "default-sorting";
  const range_min: string = params.get("range_min") ?? "0";
  const range_max: string = params.get("range_max") ?? "1000";

  const navigate = useNavigate();
  const { flower_id } = useParams();

  const { data, isLoading, isError }: FlowerCategoryType = useQueryHandler({
    queryKey: `/${category}?range_min=${range_min}&range_max${range_max}$sort=${sort}`,
    url: `/flower/category/${category}`,

    params: {
      access_token: "64f4b75bf8771ae62ff9821d",
      type: activeSection,
      sort,
      range_min,
      range_max,
    },
  });

  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4">
      {isLoading
        ? main_card_skeleton(10)
        : data?.map((value) => {
            return <Card key={value._id} {...value} />;
          })}
    </div>
  );
};

export default Mapping;
