'use client';
import './homeHeader.scss';

import Image from 'next/image';

export function HomeHeader() {
	return (
		<div className='home-header'>
			<Image
				src={'/img/logo.svg'}
				quality={100}
				width={90}
				height={25}
				priority
				alt='logo'
			/>
		</div>
	);
}
