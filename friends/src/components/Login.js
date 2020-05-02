import React, { useState } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';

const Login = ({ history }) => {

    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', creds)
            .then(res => {
                // console.log('Login.js > handleSubmit > post response', res);
                localStorage.setItem('token', res.data.payload);
                setCreds({
                    username: '',
                    password: ''
                })   
                history.push('/friends');
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log('Invalid username or password', err);
            })
    };

    return (
        <form onSubmit={handleSubmit}>

            <input type='text' 
            name='username' 
            placeholder='username' 
            onChange={handleChange}
            value={creds.username} 
            />

            <input type='password' 
            name='password' 
            placeholder='password' 
            onChange={handleChange} 
            value={creds.password}
            />

            <button>SUBMIT</button>
        </form>
    )
}
export default Login;





// const login = e => {
//     e.preventDefault();

//     axiosWithAuth().post('http://localhost:5000/api/login', creds)
//         .then(res => {
//             console.log(res);
//             localStorage.setItem('token', res.data.token);
//             this.props.history.push('/');                
//         })
//         .catch(err => {
//             console.log(`Login post error`, err)
//         }) 
// }