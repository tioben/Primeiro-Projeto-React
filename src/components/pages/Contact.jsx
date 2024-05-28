import { useState } from 'react';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados para o Firebase ou outro backend
    console.log(formData); // Exemplo: envio de dados para o console
    // Lógica de envio para o backend aqui
    // Resetar o formulário após o envio, se necessário
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contato</h1>
    </div>
  );
}

export default Contact;
