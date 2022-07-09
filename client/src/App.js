import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactsProvider } from './context/ContactsContext';
import { ConversationsProvider } from './context/ConversationsContext';
import { SocketProvider } from './context/SocketContext';

// Import Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {

  const [id, setId] = useLocalStorage('id');
  
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onSubmitId={setId} />  
  );
}

export default App;