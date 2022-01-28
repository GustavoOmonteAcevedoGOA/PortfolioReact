const Input = ({name, type, id, values, change, label}) => {
    return(
        <div className=''>
            <label className='title' htmlFor = { name }>
                { label }
                <input
                    type = { type }
                    name = { name }
                    id = { id }
                    value = { values } 
                    onChange = { change }
                    className='box'>
                </input>
            </label>
        </div>
    );
};

export default Input;