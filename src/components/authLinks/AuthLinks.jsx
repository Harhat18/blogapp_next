import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "notauthendicated";
  return (
    <>
      {status === "notauthendicated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/login">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
