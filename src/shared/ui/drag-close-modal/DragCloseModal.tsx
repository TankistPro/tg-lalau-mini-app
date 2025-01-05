import { m, useAnimate, useDragControls, useMotionValue } from 'framer-motion';
import { PropsWithChildren } from 'react';
import './dragCloseModal.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {
	open: boolean;
	closeHandler: () => void;
}

export function DragCloseModal({ closeHandler, children }: Props) {
	const controls = useDragControls();
	const y = useMotionValue(0);
	const [scope, animate] = useAnimate();

	const handlerClose = async () => {
		animate(scope.current, {
			opacity: [1, 0]
		});

		const yStart = typeof y.get() === 'number' ? y.get() : 0;

		await animate('#drag-model', {
			y: [yStart, 1000]
		});

		closeHandler();
	};

	return (
		<m.div
			className='drag-close-modal'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onClick={handlerClose}
			ref={scope}
		>
			<m.div
				id='drag-model'
				onClick={e => e.stopPropagation()}
				className='drag-close-modal__wrapper'
				style={{ y }}
				initial={{ y: '100%' }}
				animate={{ y: '0' }}
				transition={{
					ease: 'linear'
				}}
				drag='y'
				onDragEnd={() => {
					if (y.get() >= 100) handlerClose();
				}}
				dragControls={controls}
				dragConstraints={{
					top: 0,
					bottom: 0
				}}
				dragElastic={{
					top: 0,
					bottom: 0.5
				}}
			>
				<div className='drag-close-modal__dragger'></div>
				<div className='drag-close-modal__content'>{children}</div>
			</m.div>
		</m.div>
	);
}
