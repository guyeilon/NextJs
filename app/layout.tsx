import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextApp',
	description: 'Welcome to my NextApp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true} className={inter.className}>
				{children}
			</body>
		</html>
	);
}
