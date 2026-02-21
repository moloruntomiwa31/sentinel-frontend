import Image from "next/image";
import Link from "next/link";
import { Activity, LayoutDashboard, ChevronRight } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-white text-gray-900">
			<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow">
				<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image
							src="/images/app-logo.png"
							width={40}
							height={40}
							alt="Sentinel Logo"
						/>
						<h2 className="font-black uppercase text-xl text-blue-600 tracking-tighter">
							Sentinel
						</h2>
					</div>
					<Link
						href="/dashboard"
						className="text-sm font-semibold bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
					>
						Launch Dashboard
					</Link>
				</nav>
			</header>

			<main className="grow">
				<section className="py-20 px-6 max-w-4xl mx-auto text-center">
					<span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
						Smart Monitoring • Smarter Readiness • Safer Hospitals
					</span>
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
						Real-Time Hospital Intelligence <br />
						<span className="text-blue-600">That Saves Lives</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
						From continuous patient monitoring to live ward capacity tracking,
						Sentinel Ward AI helps hospitals detect deterioration early and
						prepare patients before they arrive.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition shadow-lg shadow-blue-200">
							Request Demo
						</button>
						<button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full transition">
							Explore the System
						</button>
					</div>
				</section>

				<section className="py-20 bg-gray-50 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
								Core Features
							</span>
							<h2 className="text-4xl font-bold mt-2">
								Precision Hospital Management
							</h2>
							<p className="text-gray-600">
								Explore how our modules work together to create a safer, more
								efficient hospital environment.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
								<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
									<Activity size={28} />
								</div>
								<h3 className="text-2xl font-bold mb-3">
									Patient Vital Monitoring via IoT
								</h3>
								<p className="text-blue-500 font-medium mb-4">
									AI & IoT early warning system for patient risk.
								</p>
								<p className="text-gray-600 leading-relaxed mb-6">
									Wearable and bedside sensors stream live vitals into a risk
									scoring engine, flagging high-risk cases before clinical
									deterioration becomes critical.
								</p>
								<Link
									href="#"
									className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
								>
									Learn More <ChevronRight size={18} />
								</Link>
							</div>

							<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
								<div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
									<LayoutDashboard size={28} />
								</div>
								<h3 className="text-2xl font-bold mb-3">
									Ward Capacity Tracker
								</h3>
								<p className="text-blue-500 font-medium mb-4">
									Operational Intelligence For Bed & Resource Management
								</p>
								<p className="text-gray-600 leading-relaxed mb-6">
									Tracks bed occupancy, ICU utilization, and staff ratios.
									Generate readiness signals of hospitals to support real-time
									decision making.
								</p>
								<Link
									href="#"
									className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
								>
									Learn More <ChevronRight size={18} />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-900 py-6 px-6">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex items-center gap-2">
						<Image
							src="/images/app-logo.png"
							width={30}
							height={30}
							alt="Logo"
						/>
						<span className="font-bold text-gray-100 uppercase tracking-tight">
							Sentinel Ward AI
						</span>
					</div>
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} Sentinel. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
