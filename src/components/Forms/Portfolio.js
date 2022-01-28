import { useEffect, useState } from 'react';
import SendPost from '../../helpers/Services/SendPost';
import SendPut from '../../helpers/Services/SendPut';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';

const Portfolio = () => {
    
    const { search } = useLocation();
    const navigate = useNavigate();
    const id = new URLSearchParams(search).get('id');
    const textButton = !id?'Add':'Edit';

    const [ data, setData ] = useState({ 
        id:id||'',
        title:'',
        link: '',
        imagen: ''});

    const changeData = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    
    useEffect(() => {
        fetch(`http://localhost:5000/portfolio/${id}`)
            .then(res => res.json())
            .then(portfolio => {
                setData(portfolio);
            });
    }, [id]);

    const SubmitForm = event => {
        if(id){
            SendPut(data,'portfolio');
        }
        else
        {
            SendPost(data,'portfolio');
        }
        setTimeout(() => {
            navigate('/portfolio');
        }, 2000);
        event.preventDefault();
    };

    return(
        <section className="contact" id="contact">
            <div className="row">
                <div className="content">
                    <div className="info">
                        <Form submit = { SubmitForm }>
                            <Input 
                                name = 'title'
                                type = 'text'
                                id = 'title'
                                values = { data.title }
                                change = { changeData }
                                label = 'title: '
                            />
                            <Input 
                                name = 'link'
                                type = 'text'
                                id = 'link'
                                values = { data.link }
                                change = { changeData }
                                label = 'Link: '
                            />
                            <Input 
                                name = 'imagen'
                                type = 'text'
                                id = 'imagen'
                                values = { data.imagen }
                                change = { changeData }
                                label = 'Imagen(url): '
                            />
                            <Submit value={ textButton }/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;