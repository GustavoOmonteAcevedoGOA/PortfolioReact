import { useEffect, useState } from 'react';
import { get } from 'axios';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';

const useFetch = endpoint => {
    const [ data, setData] = useState();
    const [ error, setError ] = useState();
    
    useEffect( () => {
        get(`${LinkToJsonServer}${endpoint}`)
            .then( ( { data } ) => setData(data))
            .catch( err => setError(err));
    }, [ endpoint ] );

    return [ data, error];
};

export default useFetch;