import { ChartPie, Clock3, Sparkles, CalendarDays } from "lucide-react";
import StatCard from "../Components/StatCard";

export default function DashboardPage() {
    return (
        <div className="w-full max-w-[1100px] flex flex-col">
            <section className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-[6px]">
                    <h1 className="text-[20px] font-medium text-text leading-tight">
                        Hi, (Name) 👋 Welcome to Hintro
                    </h1>
                    <p className="text-[15px] text-text-muted">
                        Ready to make your next call smarter?
                    </p>
                </div>
                <button className="h-[44px] px-[20px] rounded-lg bg-btn-primary-bg text-btn-primary-text text-[15px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                    Start New Call
                </button>
            </section>
            <section className="mt-[48px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]">
                <StatCard
                    icon={<ChartPie size={20} />}
                    title="Total Sessions"
                    value="0"
                    iconBg="#FDE7E5"
                    iconColor="#E1685B"
                />
                <StatCard
                    icon={<Clock3 size={20} />}
                    title="Average Duration"
                    value="0"
                    iconBg="#DFF4F6"
                    iconColor="#4F9CA6"
                />
                <StatCard
                    icon={<Sparkles size={20} />}
                    title="AI Used"
                    value="0"
                    iconBg="#E4F7E8"
                    iconColor="#4CA861"
                />
                <StatCard
                    icon={<CalendarDays size={20} />}
                    title="Last Session"
                    value="-"
                    iconBg="#EFE7FF"
                    iconColor="#8A63D2"
                />
            </section>
            <section className="mt-[72px] flex flex-col items-center">
                <h2 className="text-[20px] font-medium text-text mb-[24px]">
                    Recent calls
                </h2>
                <div className="w-full max-w-[820px] min-h-[240px] rounded-2xl border border-border bg-surface-card flex flex-col items-center justify-center text-center px-[24px] py-[32px]">
                    <div className="w-[48px] h-[48px] rounded-xl bg-primary-soft flex items-center justify-center mb-[20px]">
                        <CalendarDays
                            size={24}
                            className="text-primary"
                        />
                    </div>
                    <h3 className="text-[24px] font-semibold text-text mb-[12px]">
                        No Recent Calls
                    </h3>
                    <p className="max-w-[460px] text-[14px] leading-[24px] text-text-muted mb-[28px]">
                        Connect your Google Calendar to see
                        upcoming meetings, get reminders,
                        and join calls directly from Hintro.
                    </p>
                    <button className="h-[40px] px-[18px] rounded-lg border border-border bg-surface text-[14px] font-medium text-text hover:bg-surface-hover transition-colors">
                        Start a Call
                    </button>
                </div>
            </section>
        </div>
    );
}