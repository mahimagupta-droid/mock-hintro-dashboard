const BASE_URL = "https://mock-hintro-dashboard-seven.vercel.app";

export async function fetchDashboard(userId: string) {
    const res = await fetch(`${BASE_URL}/api/auth/dashboard`, {
        headers: { "x-user-id": userId, },
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard");
    }
    return res.json();
}

export async function fetchStats(userId: string) {
    const res = await fetch(`${BASE_URL}/api/call-sessions/stats`, {
        headers: {
            "x-user-id": userId,
        },
        cache: "no-store",
    }
    );

    if (!res.ok) {
        throw new Error(
            "Failed to fetch stats"
        );
    }
    return res.json();
}

export async function fetchCallSessions(userId: string) {
    const res = await fetch(`${BASE_URL}/api/call-sessions?limit=10`, {
        headers: { "x-user-id": userId, },
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch sessions");
    }
    return res.json();
}