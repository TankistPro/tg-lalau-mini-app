import { m } from 'framer-motion';
import './userProfile.scss';
import { useProfileStore } from '@/store/useProfileUser.store';
import { CardImageSlider } from '@/features/ui';

const variants = {
	hidden: { opacity: 0, y: '100%' },
	visible: { opacity: 1, y: '0%' }
};

export function UserProfile() {
	const isOpenUserProfile = useProfileStore(store => store.isOpenUserProfile);

	return (
		<m.div
			initial='hidden'
			animate={isOpenUserProfile ? 'visible' : 'hidden'}
			variants={variants}
			transition={{ duration: 0.5, type: 'spring', stiffness: 90, damping: 15 }}
			className='user-profile-modal'
		>
			<div className='user-profile-modal__gallery'>
				<CardImageSlider />
			</div>
		</m.div>
	);
}
