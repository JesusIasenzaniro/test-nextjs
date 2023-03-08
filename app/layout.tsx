'use client';
import '../styles/globals.css';
import AppContext from './Context/Context';
import { useState } from 'react';
import Header from './Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [filter, setFilter] = useState('');
    const [count, setCount] = useState(0);
    return (
        <html lang='en'>
            <body>
                <Header />
                <AppContext.Provider
                    value={{ filter, setFilter, count, setCount }}
                >
                    {children}
                </AppContext.Provider>
            </body>
        </html>
    );
}
