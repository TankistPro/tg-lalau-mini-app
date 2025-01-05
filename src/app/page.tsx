'use client';
import { UserProfile } from '@/widgets/user-profile/UserProfile';
import './app.scss';

import { CardSwiper } from '@/widgets/card-swiper';
import { useProfileStore } from '@/store/useProfileUser.store';
import { DragCloseModal } from '@/shared/ui/drag-close-modal/DragCloseModal';

export default function Home() {
	const isOpenUserProfile = useProfileStore(store => store.isOpenUserProfile);
	const closeUserProfile = useProfileStore(store => store.closeUserProfile);

	return (
		<div className='page home-page'>
			<CardSwiper />

			{isOpenUserProfile && (
				<DragCloseModal
					open={isOpenUserProfile}
					closeHandler={closeUserProfile}
				>
					<UserProfile />
				</DragCloseModal>
			)}
		</div>
	);
}
