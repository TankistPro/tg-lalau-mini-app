'use client';
import { CircleButton } from '@/shared';
import './homeHeader.scss';

import BackSVG from '../../../../public/img/back-arrow.svg';
import FilterSVG from '../../../../public/img/filter.svg';

export function HomeHeader() {
	return (
		<div className='home-header'>
			<h2>Знакомства</h2>

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
