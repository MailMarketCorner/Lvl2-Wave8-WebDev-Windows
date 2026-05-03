import ProblemCard from "../extras/ProblemCard";

import React from "react";

export const FullNames = () => {
  const people = [
    { firstName: "Taylor", lastName: "Kim" },
    { firstName: "Jordan", lastName: "Lee" },
  ];

  const names = people.map((name, index) => (
    <div key={index}>Full name: {name.firstName} {name.lastName}</div>
  ))
  return (
    <ProblemCard
      title="Map 10 — Transform shape"
      method="map"
      question="Render full names by combining firstName + lastName."
      dataPreview={people}
    >
      <div>{names}</div>
    </ProblemCard>
  );
};
