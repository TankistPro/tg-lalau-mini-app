'use client';
import './app.scss';

import { Header } from '@/shared/ui';
import { CardSwiper } from '@/widgets/card-swiper';
import { HomeHeader } from '@/widgets/home-header';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

export default function Home() {
	const lp = useLaunchParams();

	useEffect(() => {
		console.log(lp);
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
