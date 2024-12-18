import {
	backButton,
	viewport,
	themeParams,
	miniApp,
	initData,
	// $debug,
	init as initSDK
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

	// Mount all components used in the project.
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	backButton.isSupported() && backButton.mount();
	miniApp.mount();
	themeParams.mount();
	initData.restore();
	void viewport
		.mount()
		.then(() => {
			if (viewport.requestFullscreen.isAvailable()) {
				viewport.requestFullscreen();
				console.log(viewport.isFullscreen()); // true
			}

			viewport.bindCssVars();
			miniApp.bindCssVars();
			themeParams.bindCssVars();
		})
		.catch(e => {
			console.error('Something went wrong mounting the viewport', e);
		});

	// Add Eruda if needed.
	// debug && import('eruda').then(lib => lib.default.init()).catch(console.error);
}
