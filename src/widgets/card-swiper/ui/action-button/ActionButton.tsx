import { PropsWithChildren } from 'react';
import './actionButton.scss';
import { motion } from 'framer-motion';

interface Props extends PropsWithChildren {
	onClick: () => void;
}

export function ActionButton({ children, onClick }: Props) {
	return (
		<motion.button
			className='action-button'
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
