import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const SearchSimulation = ({ searchTerm }: {searchTerm: string}) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes((searchTerm || "").toLowerCase())
);
  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm}}
    >
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </ProblemCard>
  );
};
