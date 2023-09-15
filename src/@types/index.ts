export interface HeroItemType {
  id: number;
  title: string;
  big_img_url: string;
  small_img_url: string;
  button_text: string;
}
export type HeroType = HeroItemType[];

export interface UserType {
  _id?: string;
  create_account_limit?: number;
  profile_photo?: string;
  surname?: string;
  name?: string;
  email?: string;
}

export interface AuthResponseType {
  message: "success" | "error";
  data: {
    token: string;
    user: UserType;
  };
}
