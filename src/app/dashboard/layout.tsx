import Sidebar from "@/app/Components/sidebar";
import Topbar from "@/app/Components/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
            <Topbar />
            <div className="p-8 flex flex-col items-center justify-center">
                {children}
            </div>
        </main>
    </div>
}