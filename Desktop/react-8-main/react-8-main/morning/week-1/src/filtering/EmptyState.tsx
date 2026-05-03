import React from "react";
import ProblemCard from "../extras/ProblemCard";


export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";

  const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
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
