import ProblemCard from "../extras/ProblemCard";

export const RenderObjects = () => {
  const users = [{ name: "Alice" }, { name: "Bob" }];

  const userNames = users.map((user, index) => (
    <p key={index}>{user.name}</p>
  ))
  return (
    <ProblemCard
      title="Map 04 — Render objects"
      method="map"
      question="Render each user's name in a <p>."
      dataPreview={users}
    >
      {userNames}
    </ProblemCard>
  );
};
