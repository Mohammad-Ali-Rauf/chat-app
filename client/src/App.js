import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactsProvider } from './context/ContactsContext';
import { ConversationsProvider } from './context/ConversationsContext';

// Import Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {

  const [id, setId] = useLocalStorage('id');
  
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    id ? dashboard : <Login onSubmitId={setId} />  
  );
}

export default App;