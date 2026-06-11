import { PersonMagnifier } from "@gravity-ui/icons";
import Image from "next/image";

export default function DashboardHeader({ user }) {
  return (
    <div className="flex items-center justify-between mb-8 gap-4">
      {/* Search Bar */}
      <div className="relative max-w-lg w-full">
        <PersonMagnifier
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-default-500"
        />

        <input
          type="text"
          placeholder="Search applicants, jobs or talent..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-default-200 bg-background outline-none focus:border-primary"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right">
          <p className="text-sm font-medium">
            {user?.name || "Recruiter"}
          </p>
          <p className="text-xs text-default-500">
            Recruiter
          </p>
        </div>

        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center">
            <span className="text-sm font-semibold">
              {user?.name?.charAt(0)?.toUpperCase() || "R"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}