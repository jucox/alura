import './TextField.css';

const TextField = (props) => {
    const placeholderText = `${props.placeholder}...`

    const onTyped = (e) => {
        props.onChanged(e.target.value);
    }

    return (   
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyped} placeholder={placeholderText} required={props.required} />
        </div>
    )
}

export default TextField;