import CollaboratorCard from '../CollaboratorCard';
import './Team.css';

const Team = (props) => {
    return (
        props.collaborators.length > 0 &&
        <section className='team' style={
            { backgroundColor: props.backgroundColor }
        }>
            <h3 style={
                { borderColor: props.primaryColor }
            }>
                {props.teamName}
            </h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator =>
                    <CollaboratorCard
                        key={collaborator.name}
                        name={collaborator.name}
                        job={collaborator.job}
                        image={collaborator.image}
                        backgroundColor={props.primaryColor}
                    />
                )}
            </div>
        </section>
    )
}

export default Team;