import { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig'; // Importa a referência do banco de dados do Firebase
import { ref, get, update } from 'firebase/database';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  // Coletando os dados de Categoria para colocar no select
  useEffect(() => {
    const categoriesRef = ref(db, 'categories'); // Referência para a coleção de categorias no Firebase
    get(categoriesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const categoriesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setCategories(categoriesArray);
        } else {
          console.log('No categories available');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Atualiza o estado do projeto se o projectData mudar
  useEffect(() => {
    setProject(projectData || {});
  }, [projectData]);

  const submit = (e) => {
    e.preventDefault();

    // Atualiza o projeto no Firebase
    const projectRef = ref(db, `projects/${project.id}`);
    update(projectRef, project)
      .then(() => {
        handleSubmit(project); // Chama a função handleSubmit do componente pai
      })
      .catch((err) => {
        console.log('Error updating project:', err);
      });
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        text="Nome do projeto:"
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name || ''}
      />
      <Input
        text="Orçamento do projeto "
        type="number"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget || ''}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
