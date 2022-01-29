const SendGet = async (endpoint) => {

    const getData = await fetch(`https://task-tracker-backend-master.herokuapp.com/${endpoint}`, {
        method: 'GET'})
        .then( async resp => await resp.json())
        .catch( error => console.log(error));

    return getData;
};

export default SendGet;