import ProjectForm from '../Project/ProjectForm';
import styles from './Newproject.module.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { ref, push } from 'firebase/database';

function Newproject() {
  const navigate = useNavigate();

  function createPost(project) {
    // Inicializando cost e services
    project.cost = 0;
    project.services = [];

    const projectsRef = ref(db, 'projects');
    push(projectsRef, project)
      .then(() => {
        navigate('/projects', {
          state: { message: 'Projeto criado com sucesso!' },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default Newproject;
