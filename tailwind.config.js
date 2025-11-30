tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: '#00ff9d', // Hacker Green
                dark: '#050505',
                secondary: '#111',
                accent: '#ff00c1',
                ai: '#8b5cf6',
                surface: '#1a1a1a'
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'pulse-glow': 'pulseGlow 2s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 10px #00ff9d' },
                    '50%': { boxShadow: '0 0 25px #00ff9d' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}