import styles from './Select.module.css';

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <fieldset className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Selecione a categoria</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}

export default Select;
