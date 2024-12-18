'use client';
import { init } from '@/core/init';
import './app.scss';

import { Header } from '@/shared/ui';
import { CardSwiper } from '@/widgets/card-swiper';
import { HomeHeader } from '@/widgets/home-header';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		init();
	}, []);

	return (
		<div className='page home-page'>
			<Header>
				<HomeHeader />
			</Header>
			<CardSwiper />
		</div>
	);
}
