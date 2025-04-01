"use client";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfileSettings() {
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
    <Card className="m-5 bg-transparent">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Manage settings for your profile</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <h2 className="text-lg font-medium">Profile Picture</h2>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={user?.imageUrl}
              alt={user?.fullName || "Profile"}
            />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-medium">{user?.fullName}</p>
            <p className="text-sm text-muted-foreground">{primaryEmail}</p>
          </div>
        </div>
      </CardContent>
      <Separator />
    </Card>
  );
}
