import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<main className="h-screen flex items-center justify-center">
			<UserButton />
		</main>
	);
}
