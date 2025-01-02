import type { Metadata } from 'next';
import { Profile } from './Profile';

export const metadata: Metadata = {
	title: 'Профиль',
	description: ''
};

export default function Page() {
	return <Profile />;
}
