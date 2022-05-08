import React from "react";
import { useRecoilState } from "recoil";
import {
  restaurantNameState,
  scoreState,
  restaurantState,
} from "../states/formStates";
import { RestaurantInput } from "../models/restaurantModels";
import { mockApi } from "../test/mockApi";

export const RestaurantForm = () => {
  const [restaurantNameInput, setRestaurantName] = useRecoilState<string>(
    restaurantNameState
  );
  const [scoreInput, setScore] = useRecoilState<number>(scoreState);

  const [restaurants, setRestaurant] = useRecoilState(restaurantState);

  const addRestaurant = () => {
    const newRestaurant: RestaurantInput = {
      restaurantName: restaurantNameInput,
      score: scoreInput,
      description: "test",
    };
    const newRestaurantState = mockApi(newRestaurant);
    setRestaurant([...restaurants, newRestaurantState]);
  };

  const handleRestaurantNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRestaurantName(event.target.value);
  };

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScore(Number(event.target.value));
  };

  return (
    <>
      <h1>レストラン追加</h1>
      <form>
        <input placeholder="店名" onChange={handleRestaurantNameChange}></input>
        <input placeholder="スコア" onChange={handleScoreChange}></input>
        <button onClick={addRestaurant} type="button">
          追加
        </button>
      </form>
    </>
  );
};
