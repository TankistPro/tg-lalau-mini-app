import { clsx } from 'clsx';
import './userStatusOnline.scss';
interface Props {
	status: 'online' | 'offline';
}
export function UserStatusOnline({ status }: Props) {
	return (
		<div className={clsx('user-status-online', status)}>
			<span />
			<p>{status === 'online' ? 'Онлайн' : 'Была недавно'}</p>
		</div>
	);
}
