import ProblemCard from "../extras/ProblemCard";

// users.filter(() => somevalue === value)

type AdminProps = {
  id: number;
  name: string;
  isAdmin: boolean;
};

export const AdminsOnly = () => {
  const users: AdminProps[] = [
    { id: 1, name: "Alex", isAdmin: true },
    { id: 2, name: "Casey", isAdmin: false },
    { id: 3, name: "Robin", isAdmin: true },
  ];

  const admins = users.filter((user) => user.isAdmin === true);



  return (
    <ProblemCard
      title="Filter 03 — Filter objects by property"
      method="filter"
      question="Render only the admins."
      dataPreview={users}
    >
      <div>
        {admins.map((admin) => (
          <p key={admin.id}>{admin.name} is an Admin!</p>
        ))}
      </div>
    </ProblemCard>
  );
};
