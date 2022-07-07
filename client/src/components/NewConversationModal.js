import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from '../context/ContactsContext';
import { useConversations } from '../context/ConversationsContext'

const NewConversationModal = ({ closeModal }) => {

  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const [selectedContactIds, setSelectedContactIds] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds)
    closeModal()
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
      if(prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group key={contact.id} controlId={contact.id}>
              <Form.Check
                  type="checkbox"
                  label={contact.name}
                  onChange={() => handleCheckboxChange(contact.id)}
                  value={selectedContactIds.includes(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
