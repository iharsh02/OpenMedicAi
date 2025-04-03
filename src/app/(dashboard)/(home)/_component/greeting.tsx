"use client";

import { useUser } from "@clerk/nextjs";

export default function Greeting() {

    const { user } = useUser();
    
    return (
    <div className="flex gap-1 items-center align-middle">
      <p className="text-2xl md:text-4xl font-semibold">Namste,</p>
      <span className="text-2xl md:text-4xl font-semibold text-blue-500">
        {user?.fullName}
      </span>
    </div>
  );
}
