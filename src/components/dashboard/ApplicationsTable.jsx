const applicants = [
  {
    name: "Julianne Moore",
    role: "Senior Product Designer",
    date: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    name: "Robert Downey",
    role: "Backend Engineer",
    date: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
  },
  {
    name: "Emma Stone",
    role: "Marketing Lead",
    date: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    name: "Chris Pratt",
    role: "Product Manager",
    date: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
  },
];

export default function ApplicationsTable() {
  return (
    <div className="bg-content1 border border-default-100 rounded-xl p-5">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold">Recent Applications</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-default-100">
              <th className="text-left py-3">Candidate</th>
              <th className="text-left py-3">Role</th>
              <th className="text-left py-3">Date Applied</th>
              <th className="text-left py-3">Experience</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((app) => (
              <tr
                key={app.name}
                className="border-b border-default-50"
              >
                <td className="py-4">{app.name}</td>
                <td>{app.role}</td>
                <td>{app.date}</td>
                <td>{app.experience}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}