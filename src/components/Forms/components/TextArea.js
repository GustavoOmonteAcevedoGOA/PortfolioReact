const TextArea = ({name, id, values, change, label}) => {
    return(
        <div className=''>
            <label className='title' htmlFor = { name }>
                { label }
                <textarea
                    name = { name }
                    id = { id }
                    value = { values } 
                    onChange = { change }
                    rows = { 8 }
                    className='box'>
                </textarea>
            </label>
        </div>
    );
};

export default TextArea;