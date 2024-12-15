'use client';
import { HTMLAttributes, memo } from 'react';
import './geoTag.scss';
import clsx from 'clsx';

type Props = HTMLAttributes<HTMLDivElement>;

import GeoSVG from '../../../../public/img/geo-tag.svg';

export const GeoTag = memo(function GeoTag({ className, ...props }: Props) {
	return (
		<div
			className={clsx('geo-tag', className)}
			{...props}
		>
			<GeoSVG />
			<p>Кемерово, 2 км от вас</p>
		</div>
	);
});
