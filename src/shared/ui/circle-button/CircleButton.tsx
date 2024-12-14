import { ButtonHTMLAttributes, ReactNode } from 'react';
import './circleButton.scss';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function CircleButton({ children, ...props }: Props) {
	return (
		<button
			className={clsx('circle-button', props.className)}
			{...props}
		>
			{children}
		</button>
	);
}
