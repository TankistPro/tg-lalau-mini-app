import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

export function CardItem({ value, updateDate }: { value: number; updateDate: Dispatch<SetStateAction<number[]>> }) {
	const x = useMotionValue(0);

	const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
	const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

	const rotate = useTransform(() => {
		return rotateRaw.get();
	});

	const handlerDragEnd = () => {
		if (Math.abs(x.get()) > 50) {
			updateDate(pv => pv.filter(v => v != value));
		}
	};

	return (
		<motion.div
			className='card-swiper'
			drag='x'
			dragConstraints={{
				left: 0,
				right: 0
			}}
			style={{
				x,
				opacity,
				rotate,
				transition: '0.125s transform'
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
		</motion.div>
	);
}
