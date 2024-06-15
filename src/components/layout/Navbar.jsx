import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Container from './Container';
import logo from '../../assets/costs_logo.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container customClass="total-width">
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Sobre o projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
