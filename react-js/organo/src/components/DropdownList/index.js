import './DropdownList.css';

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.value}
                onChange={e => props.onChanged(e.target.value)}
            >
                <option value=""></option>
                {props.items.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>    
    )
}

export default DropdownList;