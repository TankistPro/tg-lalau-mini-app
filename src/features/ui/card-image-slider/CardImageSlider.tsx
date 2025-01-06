import Image from 'next/image';
import './cardImageSlider.scss';
import { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import { CircleButton, GeoTag } from '@/shared';

import BackSVG from '../../../../public/img/back-arrow.svg';
import FilterSVG from '../../../../public/img/filter.svg';
import { useProfileStore } from '@/store/useProfileUser.store';

const images = ['/1.png', '/2.png', '/3.png', '/2.png'];

export function CardImageSlider() {
	const openUserProfile = useProfileStore(store => store.openUserProfile);
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentImage = useMemo(() => {
		return images[currentIndex];
	}, [currentIndex]);

	const toggleImage = useCallback(
		(direction: number) => {
			if (currentIndex === images.length - 1 && direction === 1) setCurrentIndex(0);
			else if (currentIndex === 0 && direction === -1) setCurrentIndex(images.length - 1);
			else setCurrentIndex(currentIndex + direction);
		},
		[currentIndex]
	);

	return (
		<div className='card-image-slider'>
			<div className='card-image-slider__controls'>
				<div className='control-wrapper'>
					{images.map((_, index) => (
						<span
							className={clsx({ current: index === currentIndex })}
							key={index}
						/>
					))}
				</div>

				<div className='control__header'>
					<GeoTag />
					<span>
						<CircleButton>
							<BackSVG />
						</CircleButton>
						<CircleButton>
							<FilterSVG />
						</CircleButton>
					</span>
				</div>
			</div>

			<Image
				src={currentImage}
				fill
				style={{ height: '100%', width: '100%', objectFit: 'cover' }}
				alt='user'
				onClick={openUserProfile}
			/>

			<span
				className='click-area'
				onClick={() => toggleImage(-1)}
			/>
			<span
				className='click-area'
				onClick={() => toggleImage(1)}
			/>
		</div>
	);
}
