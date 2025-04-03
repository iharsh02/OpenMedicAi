"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export function User() {
	const { user } = useUser();
	
	const getInitials = () => {
    if (user?.fullName) {
      return user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
    return "U";
  };

  const primaryEmail =
    user?.primaryEmailAddress?.emailAddress ||
    (user?.emailAddresses && user.emailAddresses.length > 0
      ? user.emailAddresses[0].emailAddress
      : "No email available");


	
	return (
    <div className="flex items-center gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.imageUrl} alt={user?.fullName || "Profile"} />
        <AvatarFallback>{getInitials()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{user?.fullName}</p>
        <p className="text-sm text-muted-foreground">{primaryEmail}</p>
      </div>
    </div>
  );
}
