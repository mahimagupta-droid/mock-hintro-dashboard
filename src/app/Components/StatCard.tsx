import { ReactNode } from "react";
interface StatCardProps {
    icon: ReactNode;
    title: string;
    value: string;
    iconBg: string;
    iconColor: string;
}

export default function StatCard({ icon, title, value, iconBg, iconColor, }: StatCardProps) {
    return (
        <div className="w-full max-w-[260px] h-[92px] rounded-xl border border-border bg-surface-card px-[18px] flex items-center gap-[16px]">
            <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center" style={{ backgroundColor: iconBg, color: iconColor, }}>
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-[15px] font-medium text-text-sub">
                    {title}
                </p>
                <h2 className="text-[30px] font-semibold leading-none text-text mt-[8px]">
                    {value}
                </h2>
            </div>
        </div>
    );
}