export function formatDuration(seconds: number): string {
    if (!seconds || seconds === 0) return '0';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}sec`;
    return `${s}sec`;
}

export function formatRelativeDate(isoString: string | null): string {
    if (!isoString) return '—';
    const diff = Date.now() - new Date(isoString).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
}

export function formatDateHeader(isoString: string): string {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || ~~(day % 100 / 10) === 1) ? 0 : day % 10];
    return `${month} ${day}${suffix}`;
}

export function formatTime(isoString: string): string {
    return new Date(isoString)
        .toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        })
        .toLowerCase();
}

export function groupCallsByDate(sessions: any[]) {
    const groups: Record<string, any[]> = {};
    sessions.forEach((session) => {
        const dateKey = new Date(session.started_at).toDateString();
        if (!groups[dateKey]) groups[dateKey] = [];
        groups[dateKey].push(session);
    });
    return Object.entries(groups).map(([dateKey, calls]) => ({
        dateLabel: formatDateHeader(calls[0].started_at),
        calls,
    }));
}

export function apiHeaders(userId: string): HeadersInit {
    return { 'x-user-id': userId };
}