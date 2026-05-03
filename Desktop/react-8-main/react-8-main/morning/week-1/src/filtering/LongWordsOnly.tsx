import ProblemCard from "../extras/ProblemCard";

export const LongWordsOnly = () => {
  const words = ["tiny", "short", "bigger", "elephant", "cat"];

  const longWords = words.filter((word) => word.length > 4);

  return (
    <ProblemCard
      title="Filter 02 — Filter strings by length"
      method="filter"
      question="Render only words longer than 4 characters."
      dataPreview={longWords}
    >
      <div>
        {longWords.map((word, index) => (
          <p key={index}>{word}</p>
        ))}

      </div>
    </ProblemCard>
  );
};
