import './header.scss';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Header({ children }: Props) {
	return <header>{children}</header>;
}
