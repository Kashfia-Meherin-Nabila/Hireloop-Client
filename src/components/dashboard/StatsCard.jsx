export default function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-content1 border border-default-100 rounded-xl p-5">
      <div className="mb-4">{icon}</div>

      <p className="text-sm text-default-500">{title}</p>

      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}