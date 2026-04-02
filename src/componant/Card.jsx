import React from "react";

function Card({ data }) {
  console.log("hello", name);
  return (
    <div>
      <img src={data.image} alt="img not found" />
      <h4>{data.name}</h4>
      <span>{data.price}</span>
      <span>
        <img src="../assets/Star_fill.svg" alt="star" />
        {data.rating}({data.votes})
      </span>
    </div>
  );
}

export default Card;
