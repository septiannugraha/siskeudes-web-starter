// app/ClientLayout.tsx
'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useAuth } from "./hooks/useAuth";

const PUBLIC_PATHS = ['/login', '/landing'];

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const router = useRouter();
    const { isAuthenticated, isLoading, error, checkAuth } = useAuth();

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated && pathname === '/login') {
                router.push('/landing');
            } else if (!isAuthenticated && !PUBLIC_PATHS.includes(pathname)) {
                router.push('/login');
            }
        }
    }, [isAuthenticated, isLoading, pathname, router]);

    // Add this effect to recheck auth on pathname change
    useEffect(() => {
        checkAuth();
    }, [pathname, checkAuth]);

    const content = useMemo(() => {
        if (isLoading) {
            return <div>Loading...</div>; // Or a proper loading component
        }

        if (error) {
            return <div>Error: {error.message}</div>; // Or a proper error component
        }

        if (PUBLIC_PATHS.includes(pathname) || isAuthenticated) {
            return children;
        }

        return null;
    }, [children, isLoading, error, isAuthenticated, pathname]);

    return content;
}
