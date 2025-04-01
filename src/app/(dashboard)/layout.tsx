import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/global/app-sidebar";
import { BredCrumbHeader } from "@/components/global/breadcrumb-header";
import { ModeToggle } from "@/components/global/mode-toggle";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16  justify-between shrink-0 items-center gap-2 p-2">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<BredCrumbHeader />
					</div>
					<ModeToggle />
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
