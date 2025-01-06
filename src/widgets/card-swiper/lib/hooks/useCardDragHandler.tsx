import { useMotionValue, useTransform, PanInfo, useMotionValueEvent } from 'framer-motion';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { cardDrivenPropsType, CardSwipeDirection, IsDragOffBoundary } from '../types/card-swiper.type';

type Props = {
	setDirection: Dispatch<SetStateAction<CardSwipeDirection | ''>>;
	setIsDragging: Dispatch<SetStateAction<boolean>>;
	setIsDragOffBoundary: Dispatch<SetStateAction<IsDragOffBoundary>>;
};

const offsetBoundary = 100;

const initialDrivenProps: cardDrivenPropsType = {
	cardWrapperX: 0,
	buttonScaleLike: 1,
	buttonScaleSkip: 1,
	hintLikeOpacity: 0,
	hintSkipOpacity: 0
};

export const useCardDragHandler = ({ setDirection, setIsDragging, setIsDragOffBoundary }: Props) => {
	const x = useMotionValue(0);

	const [cardDrivenProps, setCardDrivenProps] = useState<cardDrivenPropsType>(initialDrivenProps);

	const inputX = [offsetBoundary * -1, 0, offsetBoundary];
	const outputActionScaleSkipAnswer = [1.3, 1, 0.9];
	const outputActionScaleLikeAnswer = [0.9, 1, 1.3];
	const rotate = useTransform(x, inputX, [-10, 0, 10]);
	const drivenActionSkipScale = useTransform(x, inputX, outputActionScaleSkipAnswer);
	const drivenActionLikeScale = useTransform(x, inputX, outputActionScaleLikeAnswer);

	const drivenHintLikeOpacity = useTransform(x, [0, offsetBoundary], [0, 1]);
	const drivenHintSkipOpacity = useTransform(x, [0, offsetBoundary * -1], [0, 1]);

	const handlerDragEnd = useCallback(
		(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
			setIsDragging(false);
			setIsDragOffBoundary(null);
			const isOffBoundary = info.offset.x > offsetBoundary || info.offset.x < -offsetBoundary;
			const direction = info.offset.x > 0 ? 'right' : 'left';

			if (isOffBoundary) {
				setDirection(direction);
			}
		},
		[setIsDragging, setIsDragOffBoundary, setDirection]
	);

	const handlerOnDrag = useCallback(
		(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
			const offset = info.offset.x;

			if (offset < 0 && offset < offsetBoundary * -1) {
				setIsDragOffBoundary('left');
			} else if (offset > 0 && offset > offsetBoundary) {
				setIsDragOffBoundary('right');
			} else {
				setIsDragOffBoundary(null);
			}
		},
		[setIsDragOffBoundary]
	);

	const handlerOnDragStart = useCallback(() => {
		setIsDragging(true);
	}, [setIsDragging]);

	useMotionValueEvent(x, 'change', latest => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		setCardDrivenProps(state => ({
			...state,
			cardWrapperX: latest,
			buttonScaleSkip: drivenActionSkipScale,
			buttonScaleLike: drivenActionLikeScale,
			hintLikeOpacity: drivenHintLikeOpacity,
			hintSkipOpacity: drivenHintSkipOpacity
		}));
	});

	return {
		handlerOnDragStart,
		handlerOnDrag,
		handlerDragEnd,
		cardDrivenProps,
		rotate,
		x
	};
};
