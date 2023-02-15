import './CollaboratorCard.css';

const CollaboratorCard = (props) => {
    return (
        <div className='collaborator-card'>
            <div className='header' style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}

export default CollaboratorCard;