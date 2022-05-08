import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Restaurant, RestaurantInput } from "../models/restaurantModels";

const sampleRestaurants: Restaurant[] = [
  {
    restaurantId: "001",
    restaurantName: "Matsuya",
    score: 4.5,
    introducer: "DaisukeKataoka",
    description: "みんなの食卓でありたい",
    updatedDate: new Date("2020-12-12"),
  },
  {
    restaurantId: "002",
    restaurantName: "Sukiya",
    score: 4,
    introducer: "ShuTanabe",
    description: "すき家の牛丼",
    updatedDate: new Date("2020-1-30"),
  },
];

export const restaurantNameState = atom<string>({
  key: "restaurantNameForm",
  default: "",
});

export const scoreState = atom<number>({
  key: "score",
  default: -1,
});

export const restaurantState = atom<Restaurant[]>({
  key: "restaurant",
  default: sampleRestaurants,
});
