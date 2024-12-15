import './userNameInfo.scss';

import VerifySVG from '../../../../public/img/user-verify.svg';
import LalauSVG from '../../../../public/img/user-lalau.svg';
import { memo } from 'react';

export const UserNameInfo = memo(function UserNameInfo() {
	return (
		<div className='user-name-info'>
			<p>Вильгельмина, 21</p>
			<VerifySVG />
			<LalauSVG />
		</div>
	);
});
