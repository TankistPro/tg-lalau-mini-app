import { motion } from 'framer-motion';

import { ActionHint } from '../action-hint/ActionHint';
import { Dispatch, SetStateAction } from 'react';
import { useCardDragHandler } from '../../lib/hooks/useCardDragHandler';
import { useCardSwiper } from '../../lib/hooks/useCardSwiper';
import { CardImageSlider } from '@/features/ui';
import { CardBottom } from '../card-bottom/CardBottom';

type Props = {
	value: number;
	data: number[];
	setData: Dispatch<SetStateAction<number[]>>;
	isLast: boolean;
	isUpcoming: boolean;
};

export function CardItem({ data, setData, isLast, isUpcoming }: Props) {
	const { cardVariants, setDirection, setIsDragging, handleActionBtnOnClick, setIsDragOffBoundary } = useCardSwiper({
		updateDataOnSwipeHandler: setData,
		data
	});

	const { x, rotate, handlerOnDragStart, handlerOnDrag, handlerDragEnd, cardDrivenProps } = useCardDragHandler({
		setDirection,
		setIsDragging,
		setIsDragOffBoundary
	});

	return (
		<motion.div
			variants={cardVariants}
			initial='remainings'
			animate={isLast ? 'current' : isUpcoming ? 'upcoming' : 'remainings'}
			exit='exit'
			style={{ x }}
			className='card-swiper-wrapper__element'
		>
			<motion.div
				className='card-swiper'
				drag='x'
				dragConstraints={{
					left: 0,
					right: 0
				}}
				style={{
					x,
					rotate
				}}
				dragElastic={0.6}
				dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}
				onDragStart={handlerOnDragStart}
				onDrag={handlerOnDrag}
				onDragEnd={handlerDragEnd}
			>
				<CardImageSlider />

				<ActionHint
					type='like'
					opacity={cardDrivenProps.hintLikeOpacity}
				/>
				<ActionHint
					type='skip'
					opacity={cardDrivenProps.hintSkipOpacity}
				/>
				<CardBottom
					handleActionBtnOnClick={handleActionBtnOnClick}
					cardDrivenProps={cardDrivenProps}
				/>
			</motion.div>
		</motion.div>
	);
}
