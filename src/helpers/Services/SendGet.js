const SendGet = async (endpoint) => {

    const getData = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'GET'})
        .then( async resp => await resp.json())
        .catch( error => console.log(error));

    return getData;
};

export default SendGet;