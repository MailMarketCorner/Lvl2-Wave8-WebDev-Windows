import ProblemCard from "../extras/ProblemCard";

/**
 * Render out a list of each number doubled
 */

export const DoubleNumbers = () => {
  const nums = [5, 10, 15];

  const doubleList = nums.map((listed, index) => (
    <div key={index}>{listed * 2}</div>
  ));
  return (
    <ProblemCard
      title="Map 05 — Add computed data"
      method="map"
      question="Render each number doubled."
      dataPreview={nums}
    >
      {doubleList}
    </ProblemCard>
  );
};
