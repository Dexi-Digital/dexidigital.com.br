'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    resolvedTheme: 'dark' | 'light';
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: 'system',
    resolvedTheme: 'light',
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function getSystemTheme(): 'dark' | 'light' {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'dexi-ui-theme',
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return defaultTheme;
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });
    const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window === 'undefined') return 'light';
        const saved = localStorage.getItem(storageKey) as Theme;
        const currentTheme = saved || defaultTheme;
        return currentTheme === 'system' ? getSystemTheme() : currentTheme;
    });
    const [mounted, setMounted] = useState(false);

    // Apply theme to document
    const applyTheme = useCallback((newTheme: Theme) => {
        const root = window.document.documentElement;
        const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;

        root.classList.remove('light', 'dark');
        root.classList.add(resolved);
        setResolvedTheme(resolved);
    }, []);

    // Initialize on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem(storageKey) as Theme;
        if (savedTheme && savedTheme !== theme) {
            setThemeState(savedTheme);
        }
        applyTheme(savedTheme || theme);
    }, [storageKey, applyTheme, theme]);

    // Apply theme changes
    useEffect(() => {
        if (mounted) {
            applyTheme(theme);
        }
    }, [theme, mounted, applyTheme]);

    // Listen for system theme changes when using 'system' theme
    useEffect(() => {
        if (theme !== 'system') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => applyTheme('system');

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, applyTheme]);

    const setTheme = useCallback((newTheme: Theme) => {
        localStorage.setItem(storageKey, newTheme);
        setThemeState(newTheme);
    }, [storageKey]);

    const value = {
        theme,
        resolvedTheme,
        setTheme,
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider');

    return context;
};
