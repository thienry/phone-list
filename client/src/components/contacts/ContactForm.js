import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "pessoal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "pessoal"
    });
  };
  
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Adicionar Contato</h2>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Número Telefone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Tipo do Contato</h5>
      <input
        type="radio"
        name="type"
        value="pessoal"
        onChange={onChange}
        checked={type === "pessoal"}
      />{" "}
      Pessoal{" "}
      <input
        type="radio"
        name="type"
        value="profissional"
        onChange={onChange}
        checked={type === "profissional"}
      />{" "}
      Profissional{" "}
      <div>
        <input type="submit" value="Salvar" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default ContactForm;
