import type { FC } from "react";
import { useAuthUser } from "react-auth-kit";
import type { UserType, WishItemType } from "../../../@types";
import type { FlowerCategoryType } from "../../../components/home/category/mainMapping/mapping";
import { useSearchParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQuery";
import Card from "../../../components/home/category/mainMapping/mapping/card";
import { Empty } from "antd";

const Wishlist: FC = () => {
  const auth = useAuthUser()() ?? { wishlist: [] };
  const [params] = useSearchParams();
  const category: string = params.get("category") ?? "house-plants";
  const activeSection: string = params.get("type") ?? "all-plants";
  const sort: string = params.get("sort") ?? "default-sorting";
  const range_min: string = params.get("range_min") ?? "0";
  const range_max: string = params.get("range_max") ?? "1000";

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
    <div>
      {auth.wishlist.length > 0 ? (
        <div className=" grid grid-cols-3 gap-4">
          {data?.map((value) => {
            return (
              <div key={value._id}>
                {auth.wishlist.map(
                  (v: WishItemType) =>
                    value._id === v.flower_id && (
                      <Card key={v.flower_id} {...value} />
                    ),
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <Empty
            description="No wish products yet..."
            style={{ fontSize: "19px", marginTop: "50px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
