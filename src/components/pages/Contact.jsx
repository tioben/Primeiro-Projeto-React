import styles from './Contact.module.css';
import { useState, useRef } from 'react';

function Contact() {
  const [openBox, setOpenBox] = useState('none');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const msgRef = useRef(null);

  function fakeForm(event) {
    event.preventDefault();

    setOpenBox('flex');
    nameRef.current.value = '';
    emailRef.current.value = '';
    telRef.current.value = '';
    msgRef.current.value = '';
    setTimeout(() => {
      setOpenBox('none');
    }, 2000);
  }

  return (
    <div style={{ width: '100%', padding: '30px 0px' }}>
      <h1>Quer entrar em contato?</h1>
      <p>
        Nos envie uma mensagem por meio do formulário abaixo ou clique nos
        ícones das redes sociais!
      </p>
      <form
        className={styles.contact_form}
        action=""
        style={{ margin: '30px auto' }}>
        <div className={styles.fakeConfirm} style={{ display: openBox }}>
          Formulário enviado com sucesso!
        </div>
        <div>
          <fieldset>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              id="nome"
              ref={nameRef}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              ref={emailRef}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="telefone">Telefone/Celular</label>
            <input
              type="telefone"
              placeholder="+xx (xx) xxxxx-xxxx"
              name="telefone"
              id="telefone"
              ref={telRef}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="mensage_box">Mensagem</label>
            <textarea
              name="mensage_box"
              id="mensage_box"
              ref={msgRef}></textarea>
          </fieldset>
        </div>
        <button onClick={fakeForm}>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
