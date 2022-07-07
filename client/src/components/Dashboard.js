import React from 'react';

// Import Components
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../context/ConversationsContext';

const Dashboard = ({ id }) => {

  const { selectedConversation } = useConversations();

  return (
      <div className="d-flex" style={{ height: '100vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
      </div>
  )
}

export default Dashboard;