import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  const aName = names.filter((name) => name.toLowerCase().includes("a"));
  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={aName}
    >
      <div>
        {aName.map((name, index) => (
          <p key={index}>{name}</p>
        ))}

      </div>
    </ProblemCard>
  );
};
