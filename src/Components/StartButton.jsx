const StarButton = ({ value, rate, handleFilter }) => {
  return <button onClick={() => handleFilter(rate)}>{value}</button>;
};

export default StarButton;
