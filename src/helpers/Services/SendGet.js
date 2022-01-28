const SendGet = async (endpoint) => {

    const getData = await fetch(`${process.env.REACT_APP_URL_API}${endpoint}`, {
        method: 'GET'})
        .then( async resp => await resp.json())
        .catch( error => console.log(error));

    return getData;
};

export default SendGet;