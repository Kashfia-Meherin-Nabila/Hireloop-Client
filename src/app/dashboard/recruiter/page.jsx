"use client"

import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import React from "react";

const RecruiterPage = () => {
  const { data: session, isPending } = useSession();

  const user = session?.user;
  //console.log(user);

  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner color="accent" />
        <span className="text-xs text-muted">Accent</span>
      </div>
    );
  }
  return (
    <div>
      <h2>Recruiter</h2>
    </div>
  );
};

export default RecruiterPage;
