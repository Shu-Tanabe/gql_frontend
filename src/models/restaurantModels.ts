export type Restaurant = {
  restaurantId: string;
  restaurantName: string;
  score: number;
  introducer: string;
  description: string;
  updatedDate: Date;
  occasion: "Dating" | "Alone" | "Friends" | "colleague";
};

export type RestaurantInput = Pick<
  Restaurant,
  "restaurantName" | "score" | "description" | "occasion"
>;
