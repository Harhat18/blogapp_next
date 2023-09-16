import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="facebook" />
        <Image src="/tiktok.png" width={24} height={24} alt="facebook" />
        <Image src="/youtube.png" width={24} height={24} alt="facebook" />
      </div>
      <div className={styles.logo}>Blog Logo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
