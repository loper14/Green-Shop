export interface HeroItemType {
  id: number;
  title: string;
  big_img_url: string;
  small_img_url: string;
  button_text: string;
}
export type HeroType = HeroItemType[];

export interface WishItemType {
  flower_id: string;
  route_path: string;
}

export interface UserType {
  _id?: string;
  create_account_limit?: number;
  profile_photo?: string;
  surname?: string;
  name?: string;
  email?: string;
  wishlist: WishItemType[];
}

export interface AuthResponseType {
  message: "success" | "error";
  data: {
    token: string;
    user: UserType;
  };
}

export interface MainFlowerType {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price?: boolean;
  description: string;
  short_description: string;
  main_image: string;
  category: string;
  detailed_imagages: string[];
  rate: number;
  view: number;
  tags: [];
  comments: [];
  sold_times: number;
  created_by: string;
  created_at: string;
  data: object;
}
export interface ShoppingType extends MainFlowerType {
  count: number;
}
export interface CouponType {
  message: "success" | "error";
  data: { id: number; title: string; discount_for: number; code: string };
}
