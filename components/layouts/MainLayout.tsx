import { Navbar } from "../Navbar";
import Head from "next/head";
import React from "react";
import styles from "./MainLayout.module.css";
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="My First app with next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
