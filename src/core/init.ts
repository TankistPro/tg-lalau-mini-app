import {
	backButton,
	viewport,
	themeParams,
	miniApp,
	initData,
	// $debug,
	init as initSDK,
	swipeBehavior
} from '@telegram-apps/sdk-react';

/**
 * Initializes the application and configures its dependencies.
 */
export function init(): void {
	// Set @telegram-apps/sdk-react debug mode.
	// $debug.set(debug);

	// Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
	// Also, configure the package.
	initSDK();

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	backButton.isSupported() && backButton.mount();
	if (miniApp.mount.isAvailable()) {
		miniApp.mount();
		miniApp.isMounted(); // true
		miniApp.bindCssVars();
		const header_color = miniApp.isDark() ? 'secondary_bg_color' : '#ffffff';
		miniApp.setHeaderColor(header_color);
	}

	if (themeParams.mount.isAvailable()) {
		themeParams.mount();
		themeParams.isMounted(); // true
		themeParams.bindCssVars();
	}

	if (swipeBehavior.disableVertical.isAvailable()) {
		swipeBehavior.disableVertical();
	}

	initData.restore();

	void viewport
		.mount()
		.then(() => {
			if (viewport.requestFullscreen.isAvailable()) {
				viewport.requestFullscreen();
			}
			viewport.bindCssVars();
		})
		.catch(e => {
			console.error('Something went wrong mounting the viewport', e);
		});

	// Add Eruda if needed.
	// debug && import('eruda').then(lib => lib.default.init()).catch(console.error);
}
