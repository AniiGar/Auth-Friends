import React, { useState, useEffect, useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import axiosWithAuth from '../utilities/axiosWithAuth';

const FriendForm = () => {

    const [ friendState, setFriendState ] = useContext(FriendContext);
    const [newFriend, setNewFriend] = useState({
        id: undefined,
        name: '',
        age: 0,
        email: ''
    })
    
    const token = localStorage.getItem('token');
    // console.log(friendState);

    const handleChange = (e) => {
        e.preventDefault();
        console.log({[e.target.name]: e.target.value })
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
    }

    const handleAge = (e) => {
        e.preventDefault();
        console.log({[e.target.name]: Number(e.target.value) })
        setNewFriend({ ...newFriend, [e.target.name]: Number(e.target.value) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Test');

        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {

                console.log(`axios > FriendForm:`, res)

                setNewFriend({
                    id: Date.now(),
                    name: '',
                    age: 0,
                    email: ''
                })
                setFriendState(res.data)
            })
            .catch(err => {
                console.log('FriendForm axios error:', err)
              })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Name' 
                // value={newFriend.name} 
                onChange={handleChange}                
            />

            <input
                type='number'
                name='age'
                placeholder='Age' 
                // value={newFriend.age} 
                onChange={handleAge}                
            />

            <input
                type='text'
                name='email'
                placeholder='Email' 
                // value={newFriend.email} 
                onChange={handleChange}
            />

            <button type='submit'>Submit</button>
        </form>
    )
}
export default FriendForm;