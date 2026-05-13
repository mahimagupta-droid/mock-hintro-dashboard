import { Play, ChevronDown, User2Icon } from "lucide-react";

export default function Topbar() {
    return (
        <header className="h-[65px] border-b border-border bg-surface flex items-center justify-between px-[32px]">
            <h1 className="text-[24px] font-semibold text-text">
                Dashboard
            </h1>
            <div className="flex items-center gap-[18px]">
                <button className="h-[40px] px-[16px] border border-border rounded-md bg-surface flex items-center gap-[8px] text-[14px] font-medium text-text hover:bg-surface-hover transition-colors">
                    <Play size={15} fill="currentColor" strokeWidth={1.8} />
                    <span>Watch Tutorial</span>
                </button>
                <div className="flex items-center gap-[10px] cursor-pointer">
                    <div className="w-[36px] h-[36px] rounded-full overflow-hidden border border-border">
                        <User2Icon className="mt-1.5 m-auto" width={25} height={25} />
                    </div>
                    <ChevronDown size={16} className="text-text-muted" />
                </div>
            </div>
        </header>
    );
}