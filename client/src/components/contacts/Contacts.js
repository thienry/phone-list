import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) return <h4>Por Favor, adicione um contato.</h4>;

  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
