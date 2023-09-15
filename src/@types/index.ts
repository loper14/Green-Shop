export interface HeroItemType {
  id: number;
  title: string;
  big_img_url: string;
  small_img_url: string;
  button_text: string;
}
export type HeroType = HeroItemType[];
