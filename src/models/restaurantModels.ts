export type Restaurant = {
  restaurantId: string;
  restaurantName: string;
  score: number;
  introducer: string;
  description: string;
  updatedDate: Date;
};

export type RestaurantInput = Pick<
  Restaurant,
  "restaurantName" | "score" | "description"
>;
