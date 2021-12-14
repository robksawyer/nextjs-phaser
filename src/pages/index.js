import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css';

const Game = dynamic(() => import('@/components/Game'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phaser Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Game />
      </main>

      <footer className="relative flex items-center justify-center w-screen text-sm">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <span>Powered by </span>
          <img src="/vercel.svg" alt="Vercel Logo" className="w-[60px]" />
        </a>
      </footer>
    </div>
  );
}
