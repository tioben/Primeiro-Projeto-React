import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';

import Container from '../layout/Container';
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';

function Projects() {
  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Pojeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        <p>projetos...</p>
      </Container>
    </div>
  );
}

export default Projects;
