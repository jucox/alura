import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      backgroundColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      backgroundColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      backgroundColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      backgroundColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#D86EBF',
      backgroundColor: '#FAE5F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      backgroundColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      backgroundColor: '#FFEEDF'
    }
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdded = (collaborator) => {
    debugger;
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
        <Banner />
        <Form
          teams={teams.map(team => team.name)}
          onNewCollaboratorRegistering={
            collaborator => onNewCollaboratorAdded(collaborator)
          }
        />

        {teams.map(team => <Team
          key={team.name}
          teamName={team.name}
          primaryColor={team.primaryColor}
          backgroundColor={team.backgroundColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}

        <Footer />
    </div>
  );
}

export default App;