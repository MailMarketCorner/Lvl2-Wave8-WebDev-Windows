import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const RankedList = () => {
  const items = ["Learn JS", "Practice map()", "Build UI"];

  const itemsList = items.map((item, index) => (
    <div key={index}>{index + 1}. {item}</div>
  ));
  return (
    <ProblemCard
      title="Map 08 — Use index for ranking"
      method="map"
      question="Render a ranked list: 1. item, 2. item, etc."
      dataPreview={items}
    >
      {itemsList}
    </ProblemCard>
  );
};
