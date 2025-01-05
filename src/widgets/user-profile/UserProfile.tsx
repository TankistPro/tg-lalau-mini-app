// import { m } from 'framer-motion';
import { UserTag } from '@/shared/ui/user-tag/UserTag';
import './userProfile.scss';
// import { useProfileStore } from '@/store/useProfileUser.store';
import { CardImageSlider } from '@/features/ui';
import { USER_TAGS } from '@/shared/config/user-tags.config';

import SkipSVG from '../../../public/img/action-icon/skip.svg';
import LikeSVG from '../../../public/img/action-icon/like.svg';
import MessageSVG from '../../../public/img/message.svg';

import { CircleButton, PUBLIC_PAGES } from '@/shared';
import router from 'next/router';
import { ActionButton } from '../card-swiper/ui/action-button/ActionButton';

export function UserProfile() {
	return (
		<div className='user-profile-modal'>
			<div className='user-profile-modal__gallery'>
				<CardImageSlider />
			</div>

			<div className='user-profile-modal__tags'>
				<UserTag
					text={'164 см'}
					type={USER_TAGS.HEIGHT}
				/>
				<UserTag
					text={'Стройное'}
					type={USER_TAGS.BODY}
				/>
				<UserTag
					text={'Тёмные'}
					type={USER_TAGS.HAIR}
				/>
				<UserTag
					text={'Зелёные'}
					type={USER_TAGS.EYES}
				/>
				<UserTag
					text={'Спонсорские отношения'}
					type={USER_TAGS.RELATIONS}
				/>
				<UserTag
					text={'Провести вечер'}
					type={USER_TAGS.TIME_SPEND}
				/>
			</div>

			<div className='user-profile-modal__buttons'>
				<ActionButton
					scale={1}
					onClick={() => {}}
				>
					<SkipSVG />
				</ActionButton>
				<CircleButton
					className='card-bottom__message'
					onClick={() => router.push(PUBLIC_PAGES.MESSENGER)}
				>
					<MessageSVG />
				</CircleButton>
				<ActionButton
					scale={1}
					onClick={() => {}}
				>
					<LikeSVG />
				</ActionButton>
			</div>
		</div>
	);
}
