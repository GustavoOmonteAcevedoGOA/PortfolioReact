const SendPut = (data,endpoint) => {

    fetch(`https://task-tracker-backend-master.herokuapp.com/${endpoint}/${data.id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then( resp => resp.json())
        .then( resp => console.log(resp))
        .catch( error => console.log(error));
};

export default SendPut;