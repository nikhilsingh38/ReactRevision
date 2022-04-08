import React, { useState } from "react";
import {nanoid} from 'nanoid';

const AddRestautants = ({handleSubmit}) => {
  const initialState = {
    id: nanoid(4),
    name: "",
    type: "",
    image: "",
    cash: "",
    card: "",
    upi: "",
    rating: "",
    price_for_two: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "card" || name === "cash" || name === "upi") {
      setState({ ...state, [name]: checked });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const { name, type, image, rating, price_for_two } = state;

  return (
    <div>
      <div className="forms-div">
        <h1>Fill you Restaurant Details and Add</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Restaurant Name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Cuisine Type"
            value={type}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Add Image URL"
            value={image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price_for_two"
            placeholder="Price for two"
            value={price_for_two}
            onChange={handleChange}
          />
          <div>
            <input type="checkbox" name="card" onChange={handleChange} />
            <label>Card</label>
            <input type="checkbox" name="cash" onChange={handleChange} />
            <label>Cash</label>
            <input type="checkbox" name="upi" onChange={handleChange} />
            <label>UPI </label>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(state);
              setState(initialState);
            }}
          >
            Add Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}


export default AddRestautants;
