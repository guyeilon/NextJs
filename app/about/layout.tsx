import React from 'react';

import styles from './styles.module.css';
import type { Metadata } from 'next';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav>About Navbar</nav>
			<main className={styles.main}>{children}</main>
		</>
	);
}

export const metadata: Metadata = {
	title: 'About',
	description: 'Welcome to about page',
};
