import { create } from 'zustand';
import { IUseProfileStore } from './types/useProfileUser.types';

export const useProfileStore = create<IUseProfileStore>(set => ({
	isOpenUserProfile: false,
	openUserProfile: () => {
		set({ isOpenUserProfile: true });
	},
	closeUserProfile: () => {
		set({ isOpenUserProfile: false });
	}
}));
