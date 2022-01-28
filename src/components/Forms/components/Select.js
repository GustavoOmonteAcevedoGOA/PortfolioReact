const Select = ( { label, name, id , change, value}) => {
    
    return(
        <div className=''>
            <label className='title' htmlFor = { name }>
                { label }
                <select
                    className='box'
                    name = { name }
                    id = { id } 
                    defaultValue = { value }
                    required 
                    onChange = { change }
                >
                    <option value="">-Seleccionar-</option>
                    <option value="1">Básico</option>
                    <option value="2">Pre Intermedio</option>
                    <option value="3">Intermedio</option>
                    <option value="4">Avanzado</option>
                    <option value="5">Experto</option>
                </select>
            </label>
        </div>
    );

};

export default Select;