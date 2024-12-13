'use client';

import { useState } from 'react';
import { CardItem } from './card-item/CardItem';
import './cardSwiper.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useCardSwiper } from '../lib/hooks/useCardSwiper';

export function CardSwiper() {
	const [data, setData] = useState([1, 2, 3]);

	const { cardVariants, setDirection, setIsDragging, handleActionBtnOnClick, setIsDragOffBoundary } = useCardSwiper({
		updateDataOnSwipeHandler: setData,
		data
	});

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
								value={value}
							/>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
