const SendDelete = (endpoint, data) => {

    fetch(`http://localhost:5000/${endpoint}/${data}`, {
        method: 'DELETE'
    })
        .then( resp => resp.json())
        .catch( error => console.log(error));
};

export default SendDelete;