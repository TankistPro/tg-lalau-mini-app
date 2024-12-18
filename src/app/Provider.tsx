import { TelegramProvider } from '@/shared/lib/hooks/useTelegramContext';

export function Provider({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <TelegramProvider>{children}</TelegramProvider>;
}
