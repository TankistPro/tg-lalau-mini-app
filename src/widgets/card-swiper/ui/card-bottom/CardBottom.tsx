'use client';

import { cardDrivenPropsType, CardSwipeDirection } from '../../lib/types/card-swiper.type';
import { ActionButton } from '../action-button/ActionButton';

import SkipSVG from '../../../../../public/img/action-icon/skip.svg';
import LikeSVG from '../../../../../public/img/action-icon/like.svg';
import MessageSVG from '../../../../../public/img/message.svg';

import './cardBottom.scss';
import { CircleButton, GeoTag, PUBLIC_PAGES } from '@/shared';
import { useRouter } from 'next/navigation';
import { UserTag } from '@/shared/ui/user-tag/UserTag';
import { USER_TAGS } from '@/shared/config/user-tags.config';
import { UserNameInfo } from '@/shared/ui/user-name-info/UserNameInfo';
import { UserStatusOnline } from '@/shared/ui/user-status-online/UserStatusOnline';

interface Props {
	handleActionBtnOnClick: (btn: CardSwipeDirection) => void;
	cardDrivenProps: cardDrivenPropsType;
}

export function CardBottom({ handleActionBtnOnClick, cardDrivenProps }: Props) {
	const router = useRouter();

	return (
		<div className='card-bottom'>
			<div className='card-bottom__user'>
				<UserStatusOnline status='online' />
				<GeoTag />
				<UserNameInfo />
			</div>
			<div className='card-bottom__badges'>
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
			<div className='card-bottom__buttons'>
				<ActionButton
					scale={cardDrivenProps.buttonScaleSkip}
					onClick={() => handleActionBtnOnClick('left')}
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
					scale={cardDrivenProps.buttonScaleLike}
					onClick={() => handleActionBtnOnClick('right')}
				>
					<LikeSVG />
				</ActionButton>
			</div>
		</div>
	);
}
