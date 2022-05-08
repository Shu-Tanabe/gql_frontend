import React from "react";
import { useRecoilValue } from "recoil";
import { restaurantState } from "../states/formStates";
import { Restaurant, RestaurantInput } from "../models/restaurantModels";

type TableHeader = {
  restaurantName: string;
  score: string;
  introducer: string;
  updatedDate: string;
};

const tableHeader: TableHeader = {
  restaurantName: "店名",
  score: "スコア",
  introducer: "紹介",
  updatedDate: "更新日",
};

export const RestaurantTable = () => {
  const restaurants = useRecoilValue<Restaurant[]>(restaurantState);
  return (
    <>
      <h1>レストラン一覧</h1>
      <table>
        <thead>
          <tr>
            {Object.values(tableHeader).map((tableElement) => (
              <th key={tableElement}>{tableElement}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.restaurantId}>
              <td>{restaurant.restaurantName}</td>
              <td>{restaurant.score}</td>
              <td>{restaurant.introducer}</td>
              <td>{restaurant.updatedDate.toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
