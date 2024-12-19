'use client';

import { init } from '@/core/init';
import { useEffect } from 'react';

export function Providers({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		init();
	}, []);
	return <>{children}</>;
}
