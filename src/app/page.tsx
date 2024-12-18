'use client';
import './app.scss';

import { Header } from '@/shared/ui';
import { CardSwiper } from '@/widgets/card-swiper';
import { HomeHeader } from '@/widgets/home-header';
import { init, initData, viewport } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		init();

		console.log(initData);

		(async () => {
			console.log('requestFullscreen');
			if (viewport.requestFullscreen.isAvailable()) {
				await viewport.requestFullscreen();
				console.log(viewport.isFullscreen()); // true
			}
		})();
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
