"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";

export default function ProfileSettings() {
  const { user } = useUser();
  const primaryEmail =
    user?.primaryEmailAddress?.emailAddress ||
    (user?.emailAddresses && user.emailAddresses.length > 0
      ? user.emailAddresses[0].emailAddress
      : "No email available");
  
  const phoneNumber = user?.phoneNumbers && user.phoneNumbers.length > 0
    ? user.phoneNumbers[0].phoneNumber
    : "No phone number available";
  
  const getInitials = () => {
    if (user?.fullName) {
      return user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
    return "U";
  };

  return (
    <Card className="my-5 shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 border-2 border-primary/20 shadow-sm">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName || "Profile"} />
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-medium">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex flex-col gap-4 flex-1">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-semibold">
                {user?.fullName || "User Profile"}
              </h3>
              <p className="text-sm text-muted-foreground">Account Information</p>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <User size={16} className="text-muted-foreground" />
                <p className="text-sm">
                  <span className="font-medium">Username: </span>
                  {user?.username || "Not set"}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <p className="text-sm">
                  <span className="font-medium">Email: </span>
                  {primaryEmail}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <p className="text-sm">
                  <span className="font-medium">Phone: </span>
                  {phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}