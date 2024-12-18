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
	if (viewport.requestFullscreen.isAvailable()) {
		viewport.requestFullscreen();
		console.log(viewport.isFullscreen()); // true
	}
	void viewport.mount().catch(e => {
		console.error('Something went wrong mounting the viewport', e);
	});

	// Define components-related CSS variables.
	viewport.bindCssVars();
	miniApp.bindCssVars();
	themeParams.bindCssVars();

	// Add Eruda if needed.
	// debug && import('eruda').then(lib => lib.default.init()).catch(console.error);
}