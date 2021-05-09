import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name : "kimchi",
    color : "red",
    rating: 5
  },
  {
    id: 2,
    name : "orange",
    color : "orange",
    rating : 3.2
  },
  {
    id: 3,
    name : "떡볶이",
    color : "red",
    rating : 5.5
  },
  {
    id: 4,
    name : "치킨",
    color : "yellow",
    rating : 4.9
  }
];

function Food({ name,col,rating }){
  return <div>
    <h2> I like {name}</h2>
    <h2> color is {col} </h2>
    <h3> {rating}/10.0 </h3>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} col={dish.color} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
