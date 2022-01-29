const SendPost = (data,endpoint) => {

    fetch(`https://task-tracker-backend-master.herokuapp.com/${endpoint}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then( resp => resp.json())
        .then( resp => console.log(resp))
        .catch( error => console.log(error));
};

export default SendPost;