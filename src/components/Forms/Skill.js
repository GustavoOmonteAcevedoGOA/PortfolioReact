import { useEffect, useState } from 'react';
import SendPost from '../../helpers/Services/SendPost';
import SendPut from '../../helpers/Services/SendPut';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Input from './components/Input';
import Select from './components/Select';
import Submit from './components/Submit';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';

const Skill = () => {

    const { search } = useLocation();
    const navigate = useNavigate();
    const id = new URLSearchParams(search).get('id');
    const textButton = !id?'Add':'Save';
    const [select, setSelect] = useState(null);
    const [ data, setData ] = useState({
        id: id || '',
        skill: '',
        punctuation: null
    });

    useEffect(() => {
        if(id)
        {
            fetch(`${LinkToJsonServer}skills/${id}`)
                .then(res => res.json())
                .then(skills => {
                    setData(skills);
                    setSelect(skills.punctuation);
                });
        }else{
            setSelect(1);
        }

    }, [id,select]);

    const changeData = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    
    const SubmitForm = async ( event ) => {
        if(id){
            SendPut(data,'skills');
        }
        else
        {
            SendPost(data,'skills');
        }
        setTimeout(() => {
            navigate('/skills');
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
                                name="id"
                                type="hidden"
                                id = { data.id }
                                values={ data.id }
                                change={changeData}
                                label=""
                            />
                            <Input 
                                name = 'skill'
                                type = 'skill'
                                id = 'skill'
                                values = { data.skill }
                                change = { changeData }
                                label = 'New Skill: '
                            />
                            {
                                select && <Select
                                    name = 'punctuation'
                                    id = 'punctuation'
                                    label = 'punctuation'
                                    value = { select }
                                    change = { changeData }
                                />
                            }
                            
                            <Submit value={ textButton }/>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
