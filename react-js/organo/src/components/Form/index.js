import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'

const Form = (props) => {

    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        props.onNewCollaboratorRegistering({
            name,
            job,
            image,
            team
        });
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite o seu nome"
                    required={true}
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    required={true}
                    value={job}
                    onChanged={value => setJob(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    required={true}
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropdownList
                    label="Time"
                    items={teams}
                    required={true}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;