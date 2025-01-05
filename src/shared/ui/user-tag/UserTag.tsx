import { USER_TAGS } from '@/shared/config/user-tags.config';
import './userTag.scss';
import { memo } from 'react';

interface Props {
	text: string;
	type: USER_TAGS;
}

import BodySVG from '../../../../public/img/user-tags/body.svg';
import EyesSVG from '../../../../public/img/user-tags/eyes.svg';
import HairsSVG from '../../../../public/img/user-tags/hair.svg';
import HeightSVG from '../../../../public/img/user-tags/height.svg';
import RelationSVG from '../../../../public/img/user-tags/relations.svg';
import TimeSpendSVG from '../../../../public/img/user-tags/timeSpend.svg';

export const UserTag = memo(function UserTag({ text, type }: Props) {
	const renderIco = () => {
		switch (type) {
			case 'body':
				return <BodySVG />;
			case 'eyes':
				return <EyesSVG />;
			case 'hair':
				return <HairsSVG />;
			case 'height':
				return <HeightSVG />;
			case 'relations':
				return <RelationSVG />;
			case 'timeSpend':
				return <TimeSpendSVG />;
		}
	};

	return (
		<div className='user-tag'>
			<div className='user-tag__ico'>{renderIco()}</div>
			<p>{text}</p>
		</div>
	);
});
