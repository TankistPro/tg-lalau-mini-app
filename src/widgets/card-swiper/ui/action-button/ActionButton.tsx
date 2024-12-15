import { memo, PropsWithChildren } from 'react';
import './actionButton.scss';
import { motion } from 'framer-motion';

interface Props extends PropsWithChildren {
	onClick: () => void;
	scale: number;
}

export const ActionButton = memo(function ActionButton({ children, onClick, scale }: Props) {
	return (
		<motion.button
			className='action-button'
			onClick={onClick}
			style={{
				scale
			}}
		>
			{children}
		</motion.button>
	);
});
