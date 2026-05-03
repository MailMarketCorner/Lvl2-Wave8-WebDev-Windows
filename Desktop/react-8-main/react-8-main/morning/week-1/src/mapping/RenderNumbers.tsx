import ProblemCard from "../extras/ProblemCard";

/**
 * Render out the list of numbers
 * nums.map(() => )
 */

export const RenderNumbers = () => {
  const numbers = [1, 2, 3, 4];

  const numberText = numbers.map((number, index) => (
    <div key={index}>Number: {number}</div>
  ))

  return (
    <ProblemCard
      title="Map 02 — Render numbers as text"
      method="map"
      question='Render each number as: "Number: X".'
      dataPreview={numbers}
    >
      {numberText}
    </ProblemCard>
  );
};
