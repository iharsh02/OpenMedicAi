"use client";
import { GiCherish } from "react-icons/gi";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function Logo() {
	const router = useRouter();
	return (
		<Button variant={"outline"} size="icon" onClick={() => router.push("/")}>
			<GiCherish />
		</Button>
	);
}
