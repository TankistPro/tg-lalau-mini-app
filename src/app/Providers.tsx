'use client';

import { init } from '@/core/init';
import { domAnimation, LazyMotion } from 'framer-motion';
import { useEffect } from 'react';

export function Providers({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		init();
	}, []);
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
