import { USER_TAGS } from '@/shared/config/user-tags.config';
import './userTag.scss';
import Image from 'next/image';
import { memo } from 'react';

interface Props {
	text: string;
	type: USER_TAGS;
}

export const UserTag = memo(function UserTag({ text, type }: Props) {
	return (
		<div className='user-tag'>
			<div className='user-tag__ico'>
				<Image
					src={`/img/user-tags/${type}.svg`}
					width={15}
					height={15}
					quality={100}
					alt={type}
				/>
			</div>
			<p>{text}</p>
		</div>
	);
});
