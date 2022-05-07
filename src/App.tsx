import React, { useState } from "react";
import { Restaurant } from "./models/restaurantModels";
import "./App.css";

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

// type DisplayedRestaurant = Omit<Restaurant, "restaurantId">;

// const displayedRestaurants: DisplayedRestaurant[] = [
//   {
//     restaurantName: "Matsuya",
//     score: 4.5,
//     introducer: "DaisukeKataoka",
//     description: "みんなの食卓でありたい",
//     updatedDate: new Date("2020-12-12"),
// },{
//     restaurantName: "Sukiya",
//     score: 4,
//     introducer: "ShuTanabe",
//     description: "すき家の牛丼",
//     updatedDate: new Date("2020-1-30"),
// }
// ]

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

function App() {
  const [restaurantStates, setRestaurant] = useState<Restaurant[]>(
    sampleRestaurants
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.values(tableHeader).map((tableElement) => (
              <th key={tableElement}>{tableElement}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleRestaurants.map((restaurant) => (
            <tr key={restaurant.restaurantId}>
              <td>{restaurant.restaurantName}</td>
              <td>{restaurant.score}</td>
              <td>{restaurant.introducer}</td>
              <td>{restaurant.updatedDate.toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
