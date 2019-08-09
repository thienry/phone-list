import React, { useReducer } from "react";
import axios from "axios";

import config from "../../utils/config";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CONTACT_ERROR,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

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
        
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
