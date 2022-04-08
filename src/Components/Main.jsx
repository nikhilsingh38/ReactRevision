import data from "../restaurant_data.json";

import Restaurant from "./Restaurant";
import StarButton from "./StartButton";
import { useState } from "react";
import AddRestaurant from "./AddRestaurants";

export const Main = () => {
  const [restaurant, setRestaurant] = useState(data);

  const [starValue, setStarValue] = useState(0);
  const [cash, setCashValue] = useState(false);
  const [card, setCardValue] = useState(false);
  const [lToH, setLtoH] = useState(false);
  const [htoL, sethToL] = useState(false);
  const [hide, setHide] = useState(false);

  const handleFilter = (id) => {
    if (id === "all") {
      setStarValue(0);
      setCashValue(false);
      setCardValue(false);
      setLtoH(false);
      sethToL(false);
    } else if (id === "cash") {
      setCardValue(false);
      setCashValue(true);
    } else if (id === "card") {
      setCashValue(false);
      setCardValue(true);
    } else if (id === "low") {
      setLtoH(true);
      sethToL(false);
    } else if (id === "high") {
      setLtoH(false);
      sethToL(true);
    } else {
      setStarValue(id);
      setCashValue(false);
      setCardValue(false);
    }
  };

  return (
    <>
      <div className="buttons-all">
        {!hide ? (
          <>
            <StarButton
              value={"1+ Star"}
              handleFilter={handleFilter}
              rate={1}
            />
            <StarButton
              value={"2+ Star"}
              handleFilter={handleFilter}
              rate={2}
            />
            <StarButton
              value={"3+ Star"}
              handleFilter={handleFilter}
              rate={3}
            />
            <StarButton
              value={"4+ Star"}
              handleFilter={handleFilter}
              rate={4}
            />
            <StarButton
              value={"Cash Only"}
              handleFilter={handleFilter}
              rate={"cash"}
            />
            <StarButton
              value={"Card Payment"}
              handleFilter={handleFilter}
              rate={"card"}
            />
            <StarButton
              value={"All"}
              handleFilter={handleFilter}
              rate={"all"}
            />
            <StarButton
              value={"Price - Low to high"}
              handleFilter={handleFilter}
              rate={"low"}
            />
            <StarButton
              value={"Price - High to low "}
              handleFilter={handleFilter}
              rate={"high"}
            />
          </>
        ) : null}
        {!hide ? (
          <button
            className="add-restaurant"
            onClick={() => {
              setHide(true);
            }}
          >
            Add Restaurant
          </button>
        ) : null}
      </div>
      {hide ? (
        <AddRestaurant
          handleSubmit={(e) => {
            setRestaurant([...restaurant, e]);
            setHide(false);
          }}
        />
      ) : (
        <div className="restaurant-main-div">
          {restaurant

            .filter((e) => e.rating > starValue)

            .filter((e) => {
              if (cash) {
                return e.cash === cash;
              } else if (card) {
                return e.card === card;
              }
              return e;
            })
            .sort((a, b) => b.rating - a.rating)
            .sort((a, b) => {
              if (lToH) return a.price_for_two - b.price_for_two;
              else if (htoL) return b.price_for_two - a.price_for_two;
            })

            .map((e) => {
              return <Restaurant key={e.id} {...e} />;
            })}
        </div>
      )}
    </>
  );
};
