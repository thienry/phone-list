import React, { useReducer } from "react";
import axios from "axios";

import config from "../../utils/config";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contatos
  const getContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contacts");

      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Adiciona o contato
  const addContact = async contact => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contacts",
        contact,
        config
      );

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Apaga o contato
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Limpa os contatos
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS })
  }

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
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Limpa o filtro
  const clearFilter = contact => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
