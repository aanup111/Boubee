import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://us-central1-boubee-34260.cloudfunctions.net/api'
    
    // local api host for debugging'http://localhost:5001/boubee-34260/us-central1/api'
});

export default instance;