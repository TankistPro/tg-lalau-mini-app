'use client';

import { CustomWebApp } from '@/shared/types/Telegram.types';
import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';

// import { setCookie } from 'cookies-next';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITelegramContext extends CustomWebApp {}

export const TelegramContext = createContext<ITelegramContext>({
	isReady: false
} as ITelegramContext);

const { Provider } = TelegramContext;

interface ITelegramContextProvider {
	children: React.ReactNode;
}

export const TelegramProvider: FC<ITelegramContextProvider> = ({ children }) => {
	const [webApp, setWebApp] = useState<CustomWebApp>({} as CustomWebApp);
	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		const app = window.Telegram.WebApp;

		if (app) {
			app.ready();
			setIsReady(true);
			setWebApp(app);

			// setCookie('apiKey', app.initData);
			// setCookie('user_id', app.initDataUnsafe?.user?.id);
			// setCookie('tg-version', app.version);
			// setCookie('platform', app.platform);

			// Init Settings
			if (!app.isExpanded) {
				app.expand();
			}
			app.disableVerticalSwipes();
			app.setHeaderColor('#000000');
		}
	}, []);

	const value = useMemo(() => {
		return { ...webApp, isReady };
	}, [webApp, isReady]);

	return <Provider value={value}>{children}</Provider>;
};

export const useTelegram = () => useContext(TelegramContext);
