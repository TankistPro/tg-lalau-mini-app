'use client';
import { useTelegram } from '@/shared/lib/hooks/useTelegramContext';
import './app.scss';

import { Header } from '@/shared/ui';
import { CardSwiper } from '@/widgets/card-swiper';
import { HomeHeader } from '@/widgets/home-header';
import { useEffect } from 'react';

export default function Home() {
	const { initDataUnsafe } = useTelegram();
	useEffect(() => {
		console.log(initDataUnsafe);
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
