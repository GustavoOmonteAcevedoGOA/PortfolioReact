import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';

const SendDelete = (endpoint, data) => {

    fetch(`${LinkToJsonServer}${endpoint}/${data}`, {
        method: 'DELETE'
    })
        .then( resp => resp.json())
        .catch( error => console.log(error));
};

export default SendDelete;