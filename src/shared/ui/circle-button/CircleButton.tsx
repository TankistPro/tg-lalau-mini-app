import { ButtonHTMLAttributes, ReactNode } from 'react';
import './circleButton.scss';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function CircleButton({ children, className, ...props }: Props) {
	return (
		<button
			className={clsx('circle-button', className)}
			{...props}
		>
			{children}
		</button>
	);
}
