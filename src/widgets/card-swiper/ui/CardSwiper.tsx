'use client';

import { useState } from 'react';
import { CardItem } from './card-item/CardItem';
import './cardSwiper.scss';
import { AnimatePresence } from 'framer-motion';

export function CardSwiper() {
	const [data, setData] = useState([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]);

	return (
		<div className='card-swiper-wrapper'>
			<AnimatePresence>
				{data.map((value, index) => {
					const isLast = index === data.length - 1;
					const isUpcoming = index === data.length - 2;

					return (
						<CardItem
							value={value}
							data={data}
							setData={setData}
							isLast={isLast}
							isUpcoming={isUpcoming}
							key={index}
						/>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
