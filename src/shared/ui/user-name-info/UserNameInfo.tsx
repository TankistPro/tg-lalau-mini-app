import './userNameInfo.scss';

import VerifySVG from '../../../../public/img/user/user-verify.svg';

import { memo } from 'react';
import { PremiumBadge } from '../premium-badge/PremiumBadge';

export const UserNameInfo = memo(function UserNameInfo() {
	return (
		<div className='user-name-info'>
			<p className='user-name-info__data'>Вильгельмина, 21</p>
			<div className='user-name-info__icons'>
				<VerifySVG />
				<PremiumBadge />
			</div>
		</div>
	);
});
