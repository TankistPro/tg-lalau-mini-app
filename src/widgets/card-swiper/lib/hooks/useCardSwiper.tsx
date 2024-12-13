import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { easeExitExpo, easeOutExpo } from '../constrains/easings.data';
import { CardSwipeDirection, IsDragOffBoundary } from '../types/card-swiper.type';

export const useCardSwiper = ({
	updateDataOnSwipeHandler,
	data
}: {
	updateDataOnSwipeHandler: Dispatch<SetStateAction<number[]>>;
	data: number[];
}) => {
	const [direction, setDirection] = useState<CardSwipeDirection | ''>('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isDragging, setIsDragging] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isDragOffBoundary, setIsDragOffBoundary] = useState<IsDragOffBoundary>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars

	const handleActionBtnOnClick = useCallback((btn: CardSwipeDirection) => {
		setDirection(btn);
	}, []);

	useEffect(() => {
		if (['left', 'right'].includes(direction)) {
			updateDataOnSwipeHandler(data.slice(0, -1));
		}
	}, [direction]);

	const cardVariants = useMemo(() => {
		return {
			current: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: { duration: 0.5, ease: easeOutExpo }
			},
			upcoming: {
				opacity: 0.6,
				scale: 0.95,
				transition: { duration: 0.5, ease: easeOutExpo, delay: 0 }
			},
			remainings: {
				opacity: 0,
				scale: 0.9
			},
			exit: {
				opacity: 0,
				x: direction === 'left' ? -450 : 450,
				rotate: direction === 'left' ? -20 : 20,
				transition: { duration: 0.3, ease: easeExitExpo }
			}
		};
	}, [direction]);

	return {
		cardVariants,
		direction,
		handleActionBtnOnClick,
		setDirection,
		setIsDragging,
		setIsDragOffBoundary
	};
};
