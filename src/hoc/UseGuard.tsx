import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userStore } from '@/stores/user.store';

const UseGuard = (WrappedComponent: React.ComponentType, requireAuth: boolean = true) => {
    const AuthGuard: React.FC = (props) => {
        const router = useRouter();
        const isLoggedIn = userStore((state: any) => state.isLoggedIn)

        useEffect(() => {
            if (requireAuth && !isLoggedIn) {
                router.push('/login');
            } else if (!requireAuth && isLoggedIn) {
                router.push('/dashboard');
            }
        }, [requireAuth, isLoggedIn]);

        if ((requireAuth && isLoggedIn) || (!requireAuth && !isLoggedIn)) {
            return <WrappedComponent {...props} />;
        } else {
            return <div className='m-4'>Not logged in, redirecting...</div>;
        }
    };

    return AuthGuard;
};

export default UseGuard;
