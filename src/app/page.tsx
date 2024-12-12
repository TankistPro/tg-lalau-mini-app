import './app.scss';

import { CardSwiper } from '@/widgets/card-swiper';
// import { HomeHeader } from "@/widgets/home-header";

export default function Home() {
	return (
		<div className='page home-page'>
			{/* <HomeHeader /> */}
			<CardSwiper />
		</div>
	);
}
