import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Sugestões/Reclamações:
        <textarea {...register('feedback')} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
