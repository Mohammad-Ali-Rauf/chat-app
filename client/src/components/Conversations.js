import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../context/ConversationsContext';

const Conversations = () => {

  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup>
      {conversations.map((conversation, index) => (
        <ListGroup.Item onClick={() => selectConversationIndex(index)} key={index} action active={conversation.selected}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Conversations;