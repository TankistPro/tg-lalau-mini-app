import { Telegram, WebApp } from '@twa-dev/types';

declare global {
	interface Window {
		Telegram: CustomTelegram;
	}
}

// Дополняем неопределенные методы
export interface CustomTelegram extends Telegram {
	WebApp: CustomWebApp;
}

export interface CustomWebApp extends WebApp {
	isVerticalSwipesEnabled: boolean;
	disableVerticalSwipes: () => void;
	isReady: boolean;
}
