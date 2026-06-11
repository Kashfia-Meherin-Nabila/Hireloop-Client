// import StatsCard from "./StatsCard";
import {
  Briefcase,
  PersonFill,
  CircleCheckFill,
  SealCheck,
} from "@gravity-ui/icons";
import StatsCard from "./StatsCard";

export default function StatsSection() {
  const stats = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: <Briefcase size={22} />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <PersonFill size={22} />,
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: <SealCheck size={22} />,
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: <CircleCheckFill size={22} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </div>
  );
}