import { motion } from 'framer-motion';
import { ActionButton } from '../action-button/ActionButton';

import SkipSVG from '../../../../../public/img/action-icon/skip.svg';
import LikeSVG from '../../../../../public/img/action-icon/like.svg';
import { ActionHint } from '../action-hint/ActionHint';
import { Dispatch, SetStateAction } from 'react';
import { useCardDragHandler } from '../../lib/hooks/useCardDragHandler';
import { useCardSwiper } from '../../lib/hooks/useCardSwiper';
import { CardImageSlider } from '@/features/ui';

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
				<div className='card-swiper__bottom'>
					<ActionButton
						scale={cardDrivenProps.buttonScaleSkip}
						onClick={() => handleActionBtnOnClick('left')}
					>
						<SkipSVG />
					</ActionButton>
					<ActionButton
						scale={cardDrivenProps.buttonScaleLike}
						onClick={() => handleActionBtnOnClick('right')}
					>
						<LikeSVG />
					</ActionButton>
				</div>
			</motion.div>
		</motion.div>
	);
}
