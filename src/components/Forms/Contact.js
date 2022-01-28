import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SendPost from '../../helpers/Services/SendPost';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';
import TextArea from './components/TextArea';

const Contact = () => {    
    const navigate = useNavigate();
    const [ data, setData ] = useState({ 
        id:'',
        subject:'',
        email: '',
        content: ''});

    const changeData = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const SubmitForm = event => {
        event.preventDefault();
        SendPost(data,'emails');
        setTimeout(() => {
            navigate('/skills');
        }, 2000);
    };

    return(
        <div className="contact" >
            <div className="row">
                <div className="content">
                    <div className="info">
                        <Form submit = { SubmitForm }>
                            <Input 
                                name = 'subject'
                                type = 'text'
                                id = 'subject'
                                values = { data.subject }
                                change = { changeData }
                                label = 'Subject: '
                            />
                            <Input 
                                name = 'email'
                                type = 'email'
                                id = 'email'
                                values = { data.email }
                                change = { changeData }
                                label = 'Email: '
                            />
                            <TextArea 
                                name = 'content'
                                type = 'content'
                                id = 'content'
                                values = { data.content }
                                change = { changeData }
                                label = 'Content: '
                            />
                            <Submit value= 'Send'/>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;