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
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Adiciona o contato
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Apaga o contato
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Seta o contato atual
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Limpa o contato atual
  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Atualiza o contato
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filtra os contatos

  // Limpa o filtro

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
