"use client";

import { NavMain } from "./nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Layers2,
  LayoutDashboard,
  MessageCircleIcon,
  Settings2Icon,
  UploadIcon,
} from "lucide-react";
import { GiCherish } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { User } from "./user";

const data = {
  navMain: [
    {
      url: "/",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      url: "/reports",
      title: "Reports",
      icon: Layers2,
    },
    {
      url: "/upload-reports",
      title: "Upload Reports",
      icon: UploadIcon,
    },
    {
      url: "/ai-chat",
      title: "Ai Chat",
      icon: MessageCircleIcon,
    },
    {
      url: "/settings",
      title: "Settings",
      icon: Settings2Icon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

	
	return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg dark:bg-white dark:text-black">
                  <GiCherish className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">OpenMedic Ai</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <User />
     </SidebarFooter>
    </Sidebar>
  );
}