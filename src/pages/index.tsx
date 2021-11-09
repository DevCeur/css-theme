import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

import { useTheme } from "../hooks/useTheme";

import styles from "../styles/Home.module.css";

const HomePage = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Hey! I&apos;m a dummy title</h1>
        <p>
          A simple idea to use a light and dark theme in{" "}
          <a
            href="https://nextjs.org"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "#0070F3", textDecoration: "none" }}
          >
            <strong>Next.js</strong>
          </a>{" "}
          with CSS Variables, using hooks and native CSS. it also saves a{" "}
          <strong>
            <span style={{ fontFamily: "monospace" }}>theme</span>
          </strong>{" "}
          cookie to persist user theme selection.
        </p>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <div className={styles.social_links}>
          <a
            href="https://github.com/DevCeur"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a href="https://ceur.dev" target="_blank" rel="noopener noreferrer">
            <FiLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
