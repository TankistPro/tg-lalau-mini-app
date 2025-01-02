'use client';
import './logoHeader.scss';

import Image from 'next/image';

export function LogoHeader() {
	return (
		<div className='logo-header'>
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
