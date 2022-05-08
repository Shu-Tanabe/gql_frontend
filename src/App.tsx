import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { RestaurantForm } from "./components/RestaurantForm";
import { RestaurantTable } from "./components/RestaurantTable";

function App() {
  return (
    <div>
      <RecoilRoot>
        <RestaurantForm />
        <RestaurantTable />
      </RecoilRoot>
    </div>
  );
}

export default App;
