export default function Restaurant({
  name,
  image,
  cash,
  card,
  upi,
  rating,
  price_for_two,
  type,
}) {
  const green = {
    backgroundColor: "green",
  };
  const red = {
    backgroundColor: "red",
  };
  const orange = {
    backgroundColor: "orange",
  };

  function checkPaymentType(upi, cash, card) {
    if (upi && cash && card) return "Accept All Type of payment";
    if (upi && card) return "Accept only card or UPI";
    if (upi && cash) return "Accept only cash or UPI";
    if (cash && card) return "Accept only cash or card";
    if (cash) return "Accept only cash";
    if (card) return "Accept only card";
    else return "Accept only UPI";
  }

  function colorAdd(rating) {
    if (rating < 2) return red;
    if (rating > 2 && rating < 4) return orange;
    else return green;
  }

  return (
    <div>
      <div className="restaurant-list">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{type}</p>
        <div className="ratingPrice">
          <div className="star">
            <div style={colorAdd(rating)} className="rating">
              <span className="material-icons">star</span>
              <div className="rating-div">{rating}</div>
            </div>
          </div>

          <h3>₹{price_for_two} for two</h3>
        </div>
        <p>{checkPaymentType(upi, cash, card)}</p>
      </div>
    </div>
  );
}
