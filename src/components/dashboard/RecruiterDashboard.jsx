import DashboardHeader from "./DashboardHeader";
import StatsSection from "./StatsSection";
import ApplicationsTable from "./ApplicationsTable";
import TopCompanies from "./TopCompanies";

export default function RecruiterDashboard({ user }) {
  return (
    <div className="w-full p-6">
      <DashboardHeader user={user} />

      <h1 className="text-3xl font-bold mb-6">
        Welcome back, {user?.name}
      </h1>

      <StatsSection />

      <div className="grid lg:grid-cols-3 gap-5 mt-6">
        <div className="lg:col-span-2">
          <ApplicationsTable />
        </div>

        <div>
          <TopCompanies />
        </div>
      </div>
    </div>
  );
}