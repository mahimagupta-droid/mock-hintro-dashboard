import { LayoutDashboard, Phone, FileText, MessageSquareText, PanelsTopLeft, CircleAlert, MessageSquareMore, Gift, } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-[260px] min-h-screen border-r border-border bg-surface flex flex-col">
            <div className="h-[65px] border-b border-border flex items-center px-[32px]">
                <h1 className="text-[24px] font-semibold text-text">
                    Hintro
                </h1>
            </div>
            <div className="flex-1 flex flex-col">
                <nav className="flex flex-col gap-[8px] px-[20px] pt-[28px]">
                    <div className="h-[40px] rounded-lg bg-primary-soft flex items-center gap-[12px] px-[12px] text-primary text-[15px] font-medium">
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </div>
                    <div className="h-[40px] flex items-center gap-[12px] px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors">
                        <Phone size={18} />
                        <span>Call Insights</span>
                    </div>
                    <div className="h-[40px] flex items-center justify-between px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors">
                        <div className="flex items-center gap-[12px]">
                            <FileText size={18} />
                            <span>Knowledge Base</span>
                        </div>
                        <CircleAlert size={15} className="text-text-muted" />
                    </div>
                    <div className="h-[40px] flex items-center justify-between px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors">
                        <div className="flex items-center gap-[12px]">
                            <MessageSquareText size={18} />
                            <span>Prompts</span>
                        </div>
                        <CircleAlert size={15} className="text-text-muted" />
                    </div>
                    <div className="h-[40px] flex items-center justify-between px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors">
                        <div className="flex items-center gap-[12px]">
                            <PanelsTopLeft size={18} />
                            <span>Boxy Controls</span>
                        </div>
                        <CircleAlert size={15} className="text-text-muted" />
                    </div>
                </nav>
                <div className="mt-auto border-t border-border px-[20px] py-[24px] flex flex-col gap-[8px]">
                    <div className="h-[40px] flex items-center gap-[12px] px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors cursor-pointer">
                        <MessageSquareMore size={18} />
                        <span>Feedback History</span>
                    </div>
                    <div className="h-[40px] flex items-center gap-[12px] px-[12px] rounded-lg text-text text-[15px] font-medium hover:bg-surface-hover transition-colors cursor-pointer">
                        <Gift size={18} />
                        <span>Feedback</span>
                    </div>
                    <button className="mt-[16px] h-[44px] rounded-lg bg-[#7A7A7A] text-white text-[15px] font-medium hover:opacity-90 transition-opacity">
                        Upgrade
                    </button>
                </div>
            </div>
        </aside>
    );
}