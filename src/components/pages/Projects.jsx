import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { ref, get, remove } from 'firebase/database';

import styles from './Projects.module.css';

import Container from '../layout/Container';
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';
import Loading from '../layout/Loading';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      const projectsRef = ref(db, 'projects');
      get(projectsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const projectsArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setProjects(projectsArray);
            setRemoveLoading(true);
          } else {
            setRemoveLoading(true);
            console.log('No projects available');
          }
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    const projectRef = ref(db, `projects/${id}`);
    remove(projectRef)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
