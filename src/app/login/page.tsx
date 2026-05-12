import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-full max-w-[385px] mx-auto px-[9px] sm:px-0 flex flex-col self-start pt-[116px] sm:self-center sm:pt-0">
            <h1 className="text-[20px] sm:text-[28px] font-semibold text-center leading-none mb-[40px] text-text">
                Login
            </h1>
            
            <form className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[12px]">
                    <label
                        htmlFor="email"
                        className="text-[16px] font-normal text-text"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-faint">
                                <path d="M2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Example@email.com"
                            className="w-full bg-surface-card h-[48px] border border-border rounded-lg pl-[44px] pr-[16px] text-[16px] text-text outline-none focus:border-text transition-colors placeholder:text-text-faint"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <label
                        htmlFor="password"
                        className="text-[16px] font-normal text-text"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className="w-full bg-surface-card h-[48px] border border-border rounded-lg pl-[16px] pr-[44px] text-[16px] text-text outline-none focus:border-text transition-colors placeholder:text-text-faint"
                        />
                        <div className="absolute inset-y-0 right-0 pr-[16px] flex items-center cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-faint">
                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                <line x1="2" x2="22" y1="2" y2="22"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full h-[48px] bg-btn-primary-bg rounded-lg text-btn-primary-text text-[16px] font-medium hover:opacity-80 transition-opacity flex items-center justify-center mt-[16px]"
                >
                    <Link href="/dashboard" className="w-full h-full flex items-center justify-center">Login</Link>
                </button>
            </form>
        </div>
    );
}
