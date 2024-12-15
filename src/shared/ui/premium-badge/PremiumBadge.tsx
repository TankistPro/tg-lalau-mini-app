import PremiumSVG from '../../../../public/img/user/user-premium.svg';

import './premiumBadge.scss';

export function PremiumBadge() {
	return (
		<div className='premium-badge'>
			<p>Premium</p>
			<div className='premium-badge__ico'>
				<PremiumSVG />
			</div>
		</div>
	);
}
