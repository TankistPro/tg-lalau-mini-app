import Image from 'next/image';
import { motion, PanInfo, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { CardSwipeDirection, IsDragOffBoundary } from '../../lib/types/card-swiper.type';
import { ActionButton } from '../action-button/ActionButton';

import SkipSVG from '../../../../../public/img/action-icon/skip.svg';
import LikeSVG from '../../../../../public/img/action-icon/like.svg';

const offsetBoundary = 150;

type Props = {
	value: number;
	setDirection: Dispatch<SetStateAction<CardSwipeDirection | ''>>;
	setIsDragging: Dispatch<SetStateAction<boolean>>;
	setIsDragOffBoundary: Dispatch<SetStateAction<IsDragOffBoundary>>;
	handleActionBtnOnClick: (btn: CardSwipeDirection) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setCardDrivenProps: Dispatch<SetStateAction<any>>;
};

export function CardItem({
	value,
	setDirection,
	setIsDragging,
	setIsDragOffBoundary,
	handleActionBtnOnClick,
	setCardDrivenProps
}: Props) {
	const x = useMotionValue(0);

	const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

	const rotate = useTransform(() => {
		return rotateRaw.get();
	});

	const inputX = [offsetBoundary * -1, 0, offsetBoundary];
	const outputActionScaleBadAnswer = [3, 1, 0.3];
	const outputActionScaleRightAnswer = [0.3, 1, 3];
	const drivenActionLeftScale = useTransform(x, inputX, outputActionScaleBadAnswer);
	const drivenActionRightScale = useTransform(x, inputX, outputActionScaleRightAnswer);

	const handlerDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		setIsDragging(false);
		setIsDragOffBoundary(null);
		const isOffBoundary = info.offset.x > offsetBoundary || info.offset.x < -offsetBoundary;
		const direction = info.offset.x > 0 ? 'right' : 'left';

		if (isOffBoundary) {
			setDirection(direction);
		}
	};

	useMotionValueEvent(x, 'change', latest => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		setCardDrivenProps(state => ({
			...state,
			cardWrapperX: latest,
			buttonScaleBadAnswer: drivenActionLeftScale,
			buttonScaleGoodAnswer: drivenActionRightScale
		}));
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
				dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
				onDragStart={() => setIsDragging(true)}
				onDrag={(_, info) => {
					const offset = info.offset.x;

					if (offset < 0 && offset < offsetBoundary * -1) {
						setIsDragOffBoundary('left');
					} else if (offset > 0 && offset > offsetBoundary) {
						setIsDragOffBoundary('right');
					} else {
						setIsDragOffBoundary(null);
					}
				}}
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
				<div className='card-swiper__bottom'>
					<ActionButton onClick={() => handleActionBtnOnClick('left')}>
						<SkipSVG />
					</ActionButton>
					<ActionButton onClick={() => handleActionBtnOnClick('right')}>
						<LikeSVG />
					</ActionButton>
				</div>
			</motion.div>
		</>
	);
}
