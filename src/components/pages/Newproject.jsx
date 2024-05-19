import ProjectForm from '../Project/ProjectForm';
import styles from './Newproject.module.css';
import { useNavigate } from 'react-router-dom';

function Newproject() {
  const navigate = useNavigate(); // useNavigate retorna a função de navegação

  function createPost(project) {
    // Iniciando cost e services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // Redirect usando navigate
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
