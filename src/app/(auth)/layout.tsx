import { Logo } from "@/components/global/logo";
export default function AuthLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<header className="p-5">
			<div className="flex items-center gap-4 font-semibold">
				<Logo />
				<span className="font-semibold text-xl">OpenMedic Ai</span>
			</div>
			<div className="flex flex-col items-center  justify-center h-[85vh]">{children}</div>
		</header>
	);
}
