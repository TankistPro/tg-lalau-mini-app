import './app.scss';

// import { Header } from '@/shared/ui';
import { CardSwiper } from '@/widgets/card-swiper';
// import { HomeHeader } from '@/widgets/home-header';

export default function Home() {
	return (
		<div className='page home-page'>
			{/* <Header>
				<HomeHeader />
			</Header> */}
			<CardSwiper />
		</div>
	);
}
