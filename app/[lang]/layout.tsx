import '@/styles/index.css';
import RootLayoutClient from '@/components/layout';
import { Flexible } from '@/components/theme/flexible';
import { Toaster } from '@/components/toast/toast';
import Navbar from '@/components/navbar';
import { Metadata } from 'next';
import { DefaultMetadata } from '@/components/theme/metadata';
import { i18n } from '@/i18n/config';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DefaultMetadata,
    title: 'Create Next App',
    description: 'Generated by create next app',
    applicationName: 'vadxq',
    manifest: '/mainfest.json',
    themeColor: '#FFFFFF',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'vadxq'
    },
    formatDetection: {
      telephone: false
    },
    icons: {
      shortcut: '/favicon.ico',
      apple: [{ url: '/favicon.ico', sizes: '180x180' }]
    }
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Flexible />
        <Toaster />
        <RootLayoutClient>
          <Navbar />
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}