'use client';
import '../styles/globals.css';

import Header from './Header';
import { GlobalContextProvider } from './Context/Context';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Header />
                {/* @ts-ignore */}
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
