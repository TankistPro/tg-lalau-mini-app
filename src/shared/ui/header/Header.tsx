'use client';
import { viewport } from '@telegram-apps/sdk-react';
import './header.scss';
import { PropsWithChildren, useEffect } from 'react';

type Props = PropsWithChildren;

export function Header({ children }: Props) {
	const { safeAreaInsetTop } = viewport;
	useEffect(() => {
		console.log(viewport.safeAreaInsetTop());
	}, []);
	return (
		<header style={{ paddingTop: `${safeAreaInsetTop()}px` }}>
			{children}
			{viewport.safeAreaInsetTop()}
		</header>
	);
}
