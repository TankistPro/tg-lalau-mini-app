'use client';

import { useState } from 'react';
import { CardItem } from './card-item/CardItem';
import './cardSwiper.scss';

export function CardSwiper() {
	const [data, setData] = useState([1, 2, 3]);

	return (
		<div className='card-swiper-wrapper'>
			{data.map(value => (
				<CardItem
					updateDate={setData}
					value={value}
					key={value}
				/>
			))}
		</div>
	);
}
