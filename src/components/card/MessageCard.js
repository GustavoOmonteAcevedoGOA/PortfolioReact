const MessageCard = ( { subject, email, content } ) => {

    return (
        <div className="rows-skill">
            <h3 className="title-message">{ subject }</h3>
            <div className="info">
                <h3> { email }</h3>
                <span>{ content } </span>
            </div>
        </div>  
    );
};

export default MessageCard;