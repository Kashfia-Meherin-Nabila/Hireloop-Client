const companies = [
  {
    name: "Google Inc.",
    jobs: 24,
  },
  {
    name: "Meta Platforms",
    jobs: 18,
  },
  {
    name: "Stripe",
    jobs: 12,
  },
  {
    name: "Tesla",
    jobs: 31,
  },
];

export default function TopCompanies() {
  return (
    <div className="bg-content1 border border-default-100 rounded-xl p-5">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold">Top Companies</h3>
      </div>

      <div className="space-y-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-between border border-default-100 rounded-lg p-3"
          >
            <div>
              <h4 className="font-medium">{company.name}</h4>
              <p className="text-xs text-default-500">
                Active Hiring
              </p>
            </div>

            <span className="font-semibold">
              {company.jobs}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}