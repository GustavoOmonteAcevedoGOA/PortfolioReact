const SendDelete = (endpoint, data) => {

    fetch(`https://task-tracker-backend-master.herokuapp.com/${endpoint}/${data}`, {
        method: 'DELETE'
    })
        .then( resp => resp.json())
        .catch( error => console.log(error));
};

export default SendDelete;