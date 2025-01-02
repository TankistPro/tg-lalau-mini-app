'use client';
import { UserProfile } from '@/widgets/user-profile/UserProfile';
import './app.scss';

import { CardSwiper } from '@/widgets/card-swiper';
import { useProfileStore } from '@/store/useProfileUser.store';

export default function Home() {
	const isOpenUserProfile = useProfileStore(store => store.isOpenUserProfile);

	return (
		<div className='page home-page'>
			<CardSwiper />

			{isOpenUserProfile && <UserProfile />}
		</div>
	);
}
