import { Restaurant, RestaurantInput } from "../models/restaurantModels";
import { v4 as uuidv4 } from "uuid";

export const mockApi = (restaurant: RestaurantInput): Restaurant => {
  const newRestaurant: Restaurant = {
    restaurantId: uuidv4(),
    restaurantName: restaurant.restaurantName,
    score: restaurant.score,
    description: restaurant.description,
    introducer: "Shiba-Ken",
    updatedDate: new Date(),
  };

  return newRestaurant;
};
