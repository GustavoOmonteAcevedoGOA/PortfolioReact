const SendDelete = (endpoint, data) => {

    fetch(`${process.env.REACT_APP_URL_API}${endpoint}/${data}`, {
        method: 'DELETE'
    })
        .then( resp => resp.json())
        .catch( error => console.log(error));
};

export default SendDelete;