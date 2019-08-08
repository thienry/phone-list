import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "pessoal"
      });
    }
  }, [contactContext, current]);

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

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "pessoal"
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Editar Contato" : "Adicionar Contato"}
      </h2>
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
        <input
          type="submit"
          value={current ? "Editar" : "Salvar"}
          className="btn btn-primary"
        />

        {current && (
          <button className="btn btn-light " onClick={clearAll}>
            Limpar
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
