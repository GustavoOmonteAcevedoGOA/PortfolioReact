import { useEffect, useState } from 'react';
import SendPut from '../../helpers/Services/SendPut';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';
import TextArea from './components/TextArea';

const PersonalInformation = () => {
    
    const { search } = useLocation();
    const navigate = useNavigate();
    const id = new URLSearchParams(search).get('id');
    const textButton = !id?'Add':'Save';

    const [ data, setData ] = useState({ 
        id: id || '',
        name: '',
        occupation: '',
        description: '',
        hobby: '',
        language: ''
    });
    
    useEffect(() => {
        fetch(`http://localhost:5000/personalInformation/${id}`)
            .then(res => res.json())
            .then(personal => {
                setData(personal);
            });
    }, [id]);
    
    const changeData = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const SubmitForm = ( event ) => {
        if(id){
            SendPut(data,'personalInformation');
        }
        setTimeout(() => {
            navigate('/');
        }, 3000);
        event.preventDefault();
    };

    return(
        <section className="contact" id="contact">
            <div className="row">
                <div className="content">
                    <div className="info">
                        <Form submit = { SubmitForm }>
                            <Input
                                name="id"
                                type="hidden"
                                id = { data.id }
                                values={ data.id }
                                change={changeData}
                                label=""
                            />
                            <Input 
                                name = 'name'
                                type = 'text'
                                id = 'name'
                                values = { data.name }
                                change = { changeData }
                                label = 'Name: '
                            />
                            <Input 
                                name = 'occupation'
                                type = 'text'
                                id = 'occupation'
                                values = { data.occupation }
                                change = { changeData }
                                label = 'Occupation: '
                            />
                            <TextArea 
                                name = 'description'
                                id = 'description'
                                values = { data.description }
                                change = { changeData }
                                label = 'Description: '
                            />
                            <Input 
                                name = 'hobby'
                                type = 'text'
                                id = 'hobby'
                                values = { data.hobby }
                                change = { changeData }
                                label = 'Hobby: '
                            />
                            <Input 
                                name = 'language'
                                type = 'text'
                                id = 'language'
                                values = { data.language }
                                change = { changeData }
                                label = 'Language: '
                            />
                            <Submit value={textButton}/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalInformation;