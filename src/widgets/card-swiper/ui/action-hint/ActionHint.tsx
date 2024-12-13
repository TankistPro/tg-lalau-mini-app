import './actionHint.scss';

import LikeSVG from '../../../../../public/img/action-icon/like.svg';
import SkipSVG from '../../../../../public/img/action-icon/skip.svg';

import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
	type: 'like' | 'skip';
	opacity: number;
}

export function ActionHint({ type, opacity }: Props) {
	return (
		<motion.div
			className={clsx('action-hint', type)}
			style={{ opacity }}
		>
			{type === 'like' ? <LikeSVG /> : <SkipSVG />}
		</motion.div>
	);
}
