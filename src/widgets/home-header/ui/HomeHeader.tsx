'use client';
import { CircleButton } from '@/shared';
import './homeHeader.scss';

import BackSVG from '../../../../public/img/back-arrow.svg';
import FilterSVG from '../../../../public/img/filter.svg';
import Image from 'next/image';

export function HomeHeader() {
	return (
		<div className='home-header'>
			<Image
				src={'/img/logo.svg'}
				quality={100}
				width={110}
				height={40}
				priority
				alt='logo'
			/>

			<div className='home-header__button'>
				<CircleButton>
					<BackSVG />
				</CircleButton>
				<CircleButton>
					<FilterSVG />
				</CircleButton>
			</div>
		</div>
	);
}
