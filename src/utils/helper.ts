export interface CallSession {
    _id: string;
    started_at: string;
    ended_at?: string;
    description?: string;
    client?: string;
    total_duration_seconds?: number;
    participants?: {
        name: string;
        isUser: boolean;
    }[];
}

export function formatDuration(seconds: number): string {
    if (!seconds || seconds <= 0) {
        return '0';
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(
        (seconds % 3600) / 60
    );
    const remainingSeconds =
        seconds % 60;
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}sec`;
    }
    return `${remainingSeconds}sec`;
}

export function formatRelativeDate(isoString: string | null): string {
    if (!isoString) {
        return '—';
    }
    const diff =
        Date.now() -
        new Date(isoString).getTime();
    const days = Math.max(
        0,
        Math.floor(diff / 86400000)
    );
    if (days === 0) {
        return 'Today';
    }
    if (days === 1) {
        return 'Yesterday';
    }
    return `${days} days ago`;
}

export function formatDateHeader(isoString: string): string {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString(
        'en-US',
        {
            month: 'long',
        }
    );
    const suffix = ['th', 'st', 'nd', 'rd'][
        day % 10 > 3 || Math.floor((day % 100) / 10) === 1
            ? 0
            : day % 10
    ];
    return `${month} ${day}${suffix}`;
}

export function formatTime(isoString: string): string {
    return new Date(
        isoString
    ).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).toLowerCase();
}

export function groupCallsByDate(sessions: CallSession[]) {
    const groups: Record<string, CallSession[]> = {};
    sessions.forEach((session) => {
        const dateKey = new Date(
            session.started_at
        ).toDateString();
        if (!groups[dateKey]) {
            groups[dateKey] = [];
        }
        groups[dateKey].push(session);
    });
    return Object.entries(groups).map(
        ([_, calls]) => ({
            dateLabel: formatDateHeader(
                calls[0].started_at
            ),
            calls,
        })
    );
}

export function apiHeaders(userId: string): HeadersInit {
    return {
        'x-user-id': userId,
    };
}