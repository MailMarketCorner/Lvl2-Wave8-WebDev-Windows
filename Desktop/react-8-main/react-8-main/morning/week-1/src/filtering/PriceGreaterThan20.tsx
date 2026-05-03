import ProblemCard from "../extras/ProblemCard";
import React from "react";

export const PriceGreaterThan20 = () => {
  const products = [
    { id: 1, name: "Sticker Pack", price: 5 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 3, name: "Mousepad", price: 22 },
  ];

  const prices = products.filter((price) => price.price > 20);

  return (
    <ProblemCard
      title="Filter 04 — Filter by value"
      method="filter"
      question="Render products with price > 20."
      dataPreview={prices}
    >
      <div>
        {prices.map((price, index) => (
          <p key={index}>{price.name} costs more than $20</p>
        ))}
      </div>
    </ProblemCard>
  );
};
