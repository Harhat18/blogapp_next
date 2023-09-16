"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
