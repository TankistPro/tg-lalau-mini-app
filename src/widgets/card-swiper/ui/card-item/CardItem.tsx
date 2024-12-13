import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { cardDrivenPropsType, CardSwipeDirection, IsDragOffBoundary } from '../../lib/types/card-swiper.type';
import { ActionButton } from '../action-button/ActionButton';

import SkipSVG from '../../../../../public/img/action-icon/skip.svg';
import LikeSVG from '../../../../../public/img/action-icon/like.svg';
import { useCardDragHandler } from '../../lib/hooks/useCardDragHandler';
import { ActionHint } from '../action-hint/ActionHint';

type Props = {
	value: number;
	setDirection: Dispatch<SetStateAction<CardSwipeDirection | ''>>;
	setIsDragging: Dispatch<SetStateAction<boolean>>;
	setIsDragOffBoundary: Dispatch<SetStateAction<IsDragOffBoundary>>;
	handleActionBtnOnClick: (btn: CardSwipeDirection) => void;
};

const initialDrivenProps: cardDrivenPropsType = {
	cardWrapperX: 0,
	buttonScaleLike: 1,
	buttonScaleSkip: 1,
	hintLikeOpacity: 0,
	hintSkipOpacity: 0
};

export function CardItem({ value, setDirection, setIsDragging, setIsDragOffBoundary, handleActionBtnOnClick }: Props) {
	const [cardDrivenProps, setCardDrivenProps] = useState<cardDrivenPropsType>(initialDrivenProps);

	const { x, rotate, handlerOnDragStart, handlerOnDrag, handlerDragEnd } = useCardDragHandler({
		setDirection,
		setIsDragging,
		setIsDragOffBoundary,
		setCardDrivenProps
	});

	return (
		<>
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
				<Image
					src={`/${value}.png`}
					width={360}
					height={600}
					style={{ height: '100%', width: '100%', objectFit: 'cover' }}
					className='card-swiper__user'
					alt='user'
				/>
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
		</>
	);
}
