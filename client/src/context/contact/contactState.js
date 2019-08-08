import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jessica Aline",
        email: "jessica@gmail.com",
        phone: "8199841-4458",
        type: "pessoal"
      },
      {
        id: 2,
        name: "Priscila Borges",
        email: "priscila@gmail.com",
        phone: "8198924-4773",
        type: "pessoal"
      },
      {
        id: 3,
        name: "Fernando Albuquerque",
        email: "nando@gmail.com",
        phone: "8199151-4118",
        type: "pessoal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Adiciona o contato
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Apaga o contato

  // Seta o contato atual

  // Limpa o contato atual

  // Atualiza o contato

  // Filtra os contatos

  // Limpa o filtro

  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
