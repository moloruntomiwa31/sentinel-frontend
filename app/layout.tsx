import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import QueryProvider from "../components/QueryProvider";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-raleway",
});

export const metadata: Metadata = {
	title: "Sentinel",
	description:
		"Empowering healthcare providers with AI predictive analytics and seamless IoT integration.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.variable} antialiased font-sans`}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
