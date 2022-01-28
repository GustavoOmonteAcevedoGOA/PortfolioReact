import { createSearchParams, useNavigate } from 'react-router-dom';

const ContactCard = ( { id, location, country, email, phone, userState } ) => {

    const navigate = useNavigate();
    const params = { id };
    
    const Edit = () =>
        navigate({
            pathname: '/formContact',
            search: `?${createSearchParams(params)}`,
        });

    return (
        <div className="content">
            <h3 className="title">Contact info</h3>
            <div className="info">
                <h3> <i className="fas fa-map-marker-alt"></i> { location } - { country } </h3>
                <h3> <i className="bx bx-mail-send"></i> { email } </h3>
                <h3> <i className="bx bxl-whatsapp"></i> { phone } </h3>
            </div>
            {
                userState?<button className="btn" onClick={Edit}>Editar</button>:''
            }
        </div>  
    );
};

export default ContactCard;