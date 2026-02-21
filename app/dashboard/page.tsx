"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "../../components/LoadingScreen";

// ssr: false → Next.js never renders this on the server.
// This prevents SSR crashes from Zustand persist (localStorage),
// React Query, and other browser-only APIs used in the dashboard.
const DashboardContent = dynamic(() => import("./DashboardContent"), {
	ssr: false,
	loading: () => <LoadingScreen />,
});

export default function DashboardPage() {
	return <DashboardContent />;
}
