"use client";

import { Grid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Patient from "../../types/Patient";

export default function Dashboard() {
    const pathname = usePathname();

    const navItems = [{ name: "Dashboard", href: "/dashboard", icon: Grid }];

    const patients: Patient[] = [
        {
            id: 1,
            patient_id: 'PA-005',
            bed_number: 12,
            ward: 'Surgery',
            created_at: "12:30pm"
        },
    ]

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r bg-gray-50/50 p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-8">
                    <Image src="/images/app-logo.png" width={60} height={60} alt='App Logo' />
                    <h2 className='font-extrabold uppercase text-2xl text-blue-500 tracking-tight'>Sentinel</h2>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                            isActive
                                                ? "bg-blue-100 text-blue-500 font-bold"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        <item.icon size={20} />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <footer className='mt-auto pt-6 border-t border-gray-200 text-xs text-gray-500'>
                    <h2 className="font-semibold text-gray-700 text-lg">Dr, Akorode Bakare</h2>
                    <h3 className="font-semibold text-gray-700">General Hospital, Gbagada Lagos</h3>
                    <p>Surgical department/Unit</p>
                </footer>
            </aside>

            <main className="flex-1 p-8">
                {/* Page content goes here */}
            </main>
        </div>
    );
}