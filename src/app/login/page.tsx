import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-[384px] flex flex-col gap-[16px]">
            <h1 className="text-[16px] sm:text-[28px] sm:font-weight-[500] h-[19px] sm:font-semibold text-center mb-15">
                Login
            </h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <label
                        htmlFor="email"
                        className="text-[16px] font-normal"
                    >
                        Email
                    </label>

                    <input
                        type="text"
                        id="email"
                        placeholder="Example@gmail.com"
                        className="bg-[#F7F8F9] h-[48px] border border-[#CED1D8] rounded-lg px-4"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label
                        htmlFor="password"
                        className="text-[16px] font-normal"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className="bg-[#F7F8F9] h-[48px] border border-[#CED1D8] rounded-lg px-4 mb-5"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full h-[48px] bg-black rounded-lg text-white text-[16px] font-medium cursor-pointer mt-2"
                >
                    <Link href="/dashboard">Login</Link>
                </button>
            </div>
        </div>
    );
}
