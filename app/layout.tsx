import './globals.css';
import { Rubik } from 'next/font/google';

// טעינת פונט Rubik באופן מובנה ומהיר ב-Next.js
const rubik = Rubik({
subsets: ['hebrew', 'latin'],
weight: ['300', '400', '500', '700', '900'],
display: 'swap',
variable: '--font-rubik',
});

export const metadata = {
title: 'NovaX | הספאמר הטוב בישראל',
description: 'מערכת שליחת ה-SMS המתקדמת, המהירה והאמינה ביותר.',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (


{children}


);
}