import ProblemCard from "../extras/ProblemCard";

/**
 * map, filter, reduce
 * array.method(() => )
 */

export function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  const fruitList = fruits.map((fruit, index) => (
    <div>
    <li key={index}>{fruit}</li>
    </div>

  ))

  return (
    <ProblemCard
      title="Map 01 — Render a list of strings"
      method="map"
      question="Render each fruit inside an <li>."
      dataPreview={fruits}
    >
      {fruitList}
    </ProblemCard>
  );
}
