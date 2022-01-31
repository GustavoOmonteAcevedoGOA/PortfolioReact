import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';

const SendGet = async (endpoint) => {

    const getData = await fetch(`${LinkToJsonServer}${endpoint}`, {
        method: 'GET'})
        .then( async resp => await resp.json())
        .catch( error => console.log(error));

    return getData;
};

export default SendGet;