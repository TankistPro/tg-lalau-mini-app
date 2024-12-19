'use client';
import './header.scss';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Header({ children }: Props) {
	return <header style={{ paddingTop: `var(--tg-viewport-content-safe-area-inset-top)` }}>{children}</header>;
}
