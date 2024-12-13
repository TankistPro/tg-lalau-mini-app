'use client';

import { useEffect, useState } from 'react';
import { CardItem } from './card-item/CardItem';
import './cardSwiper.scss';
import { CardSwipeDirection, IsDragOffBoundary } from '../lib/types/card-swiper.type';
import { AnimatePresence, motion } from 'framer-motion';
import { easeOutExpo } from '../lib/constrains/easings.data';

const initialDrivenProps = {
	cardWrapperX: 0,
	buttonScaleBadAnswer: 1,
	buttonScaleGoodAnswer: 1
};

export function CardSwiper() {
	const [data, setData] = useState([1, 2, 3]);

	const [direction, setDirection] = useState<CardSwipeDirection | ''>('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isDragging, setIsDragging] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isDragOffBoundary, setIsDragOffBoundary] = useState<IsDragOffBoundary>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [cardDrivenProps, setCardDrivenProps] = useState(initialDrivenProps);

	const handleActionBtnOnClick = (btn: CardSwipeDirection) => {
		setDirection(btn);
	};

	useEffect(() => {
		if (['left', 'right'].includes(direction)) {
			setData(data.slice(0, -1));
		}

		setDirection('');
	}, [direction]);

	const cardVariants = {
		current: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.3, ease: easeOutExpo }
		},
		upcoming: {
			opacity: 0.6,
			scale: 0.95,
			transition: { duration: 0.3, ease: easeOutExpo, delay: 0 }
		},
		remainings: {
			opacity: 0,
			scale: 0.9
		},
		exit: {
			opacity: 0,
			x: direction === 'left' ? -300 : 300,
			rotate: direction === 'left' ? -20 : 20,
			transition: { duration: 0.5, ease: easeOutExpo }
		}
	};

	return (
		<div className='card-swiper-wrapper'>
			<AnimatePresence>
				{data.map((value, index) => {
					const isLast = index === data.length - 1;
					const isUpcoming = index === data.length - 2;
					return (
						<motion.div
							key={value}
							variants={cardVariants}
							initial='remainings'
							animate={isLast ? 'current' : isUpcoming ? 'upcoming' : 'remainings'}
							exit='exit'
							className='card-swiper-wrapper__element'
						>
							<CardItem
								setDirection={setDirection}
								setIsDragging={setIsDragging}
								setIsDragOffBoundary={setIsDragOffBoundary}
								handleActionBtnOnClick={handleActionBtnOnClick}
								setCardDrivenProps={setCardDrivenProps}
								value={value}
								key={value}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
