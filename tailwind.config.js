/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--color-bg)',
                surface: 'var(--color-surface)',
                'surface-main': 'var(--color-surface-main)',
                'surface-card': 'var(--color-surface-card)',
                'surface-hover': 'var(--color-surface-hover)',

                primary: 'var(--color-primary)',
                'primary-soft': 'var(--color-primary-soft)',
                'primary-dark': 'var(--color-primary-dark)',

                'icon-red-bg': 'var(--color-icon-red-bg)',
                'icon-blue-bg': 'var(--color-icon-blue-bg)',
                'icon-green-bg': 'var(--color-icon-green-bg)',
                'icon-purp-bg': 'var(--color-icon-purp-bg)',
                'icon-red-fg': 'var(--color-icon-red-fg)',
                'icon-blue-fg': 'var(--color-icon-blue-fg)',
                'icon-green-fg': 'var(--color-icon-green-fg)',
                'icon-purp-fg': 'var(--color-icon-purp-fg)',

                text: 'var(--color-text)',
                'text-sub': 'var(--color-text-sub)',
                'text-muted': 'var(--color-text-muted)',
                'text-faint': 'var(--color-text-faint)',

                border: 'var(--color-border)',
                'border-soft': 'var(--color-border-soft)',

                'avatar-bg': 'var(--color-avatar-bg)',
                'avatar-text': 'var(--color-avatar-text)',

                'btn-primary-bg': 'var(--color-btn-primary-bg)',
                'btn-primary-text': 'var(--color-btn-primary-text)',
                'btn-outline-bg': 'var(--color-btn-outline-bg)',
                'btn-outline-border': 'var(--color-btn-outline-border)',
                'btn-outline-text': 'var(--color-btn-outline-text)',
                'btn-upgrade-bg': 'var(--color-btn-upgrade-bg)',
                'btn-upgrade-text': 'var(--color-btn-upgrade-text)',
                'btn-ghost-bg': 'var(--color-btn-ghost-bg)',
                'btn-ghost-border': 'var(--color-btn-ghost-border)',
                'btn-ghost-text': 'var(--color-btn-ghost-text)',
            },

            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },

            transitionDuration: {
                DEFAULT: '180ms',
            },

            transitionTimingFunction: {
                DEFAULT: 'ease',
            },

            boxShadow: {
                card: 'var(--shadow-card)',
            },

            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};