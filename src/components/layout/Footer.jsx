import styles from './Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/tioben" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gustavo-martins-211669159/"
            target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>
        <span>Costs</span>&copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
