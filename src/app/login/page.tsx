'use client';
import Link from "next/link";
import { useState, } from "react";
import { useRouter, } from "next/navigation";
import { useUser, UserId, } from "../Context/userContext";

export default function LoginPage() {
    const router = useRouter();
    const { setUserId } = useUser();
    const [selectedUser, setSelectedUser] =
        useState<UserId>('u1');
    function handleLogin() {
        setUserId(selectedUser);
        router.push('/dashboard');
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-[385px]">
                <h1 className="text-[28px] font-semibold text-center mb-[40px] text-text">
                    Login
                </h1>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[12px]">
                        <label
                            htmlFor="email"
                            className="text-[16px] text-text"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Example@email.com"
                            className="input"
                        />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <label
                            htmlFor="password"
                            className="text-[16px] text-text"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className="input"
                        />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <label className="text-[16px] text-text">
                            Test User
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedUser('u1')
                                }
                                className={`h-[48px] rounded-lg border text-[15px] font-medium transition-colors ${selectedUser === 'u1'
                                    ? 'bg-primary-soft border-primary text-primary'
                                    : 'border-border text-text hover:bg-surface-hover'
                                    }`}
                            >
                                u1 (Empty State)
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedUser('u2')
                                }
                                className={`h-[48px] rounded-lg border text-[15px] font-medium transition-colors ${selectedUser === 'u2'
                                    ? 'bg-primary-soft border-primary text-primary'
                                    : 'border-border text-text hover:bg-surface-hover'
                                    }`}
                            >
                                u2 (Active User)
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full h-[48px] bg-btn-primary-bg rounded-lg text-btn-primary-text text-[16px] font-medium hover:opacity-80 transition-opacity flex items-center justify-center mt-[16px]"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}