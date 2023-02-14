import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
        <Banner />
        <Form
          onNewCollaboratorRegistering={
            collaborator => onNewCollaboratorAdded(collaborator)
          }
        />
    </div>
  );
}

export default App;