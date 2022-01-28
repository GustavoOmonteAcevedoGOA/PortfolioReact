import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SendPost from '../../helpers/Services/SendPost';
import SendPut from '../../helpers/Services/SendPut';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';
import TextArea from './components/TextArea';

const WorkExpirience = () => {

    const { search } = useLocation();
    const navigate = useNavigate();
    const id = new URLSearchParams(search).get('id');
    const textButton = !id?'Add':'Save';

    const [ data, setData ] = useState({
        id: id || '',
        title: '',
        occupation: '',
        description: '',
        date: ''
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}workExpirience/${id}`)
            .then(res => res.json())
            .then(workExpi => {
                setData(workExpi);
            });
    }, [id]);

    const changeData = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const SubmitForm = event => {
        if(id){
            SendPut(data,'workExpirience');
        }
        else
        {
            SendPost(data,'workExpirience');
        }
        setTimeout(() => {
            navigate('/workexperience');
        }, 2000);
        event.preventDefault();
    };

    return (
        <section className="contact" id="contact">
            <div className="row">
                <div className="content">
                    <div className="info">
                        <Form submit={SubmitForm}>
                            <Input
                                name="id"
                                type="hidden"
                                id = { data.id }
                                values={ data.id }
                                change={changeData}
                                label=""
                            />
                            <Input
                                name="title"
                                type="text"
                                id="title"
                                values={data.title}
                                change={changeData}
                                label="Title: "
                            />
                            <Input
                                name="occupation"
                                type="text"
                                id="occupation"
                                values={data.occupation}
                                change={changeData}
                                label="Occupation: "
                            />
                            <TextArea
                                name="description"
                                id="description"
                                values={data.description}
                                change={changeData}
                                label="Description: "
                            />
                            <Input
                                name="date"
                                type="text"
                                id="date"
                                values={data.date}
                                change={changeData}
                                label="Date: "
                            />
                            <Submit value={ textButton }/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExpirience;
