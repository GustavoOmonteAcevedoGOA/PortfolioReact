const Form = ( { children, submit }) => {
    return (
        <div className=''>
            <form className='' onSubmit = { submit }>
                {
                    children
                }
            </form>
        </div>
    );
};

export default Form;