import React, { useState, useEffect, useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import axiosWithAuth from '../utilities/axiosWithAuth';

import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {

    const [ friendState, setFriendState ] = useState([])

    const token = localStorage.getItem('token');
    //   console.log(token);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends', {
                headers: {
                    authorization: token
                }
            })
            .then(res => {
                // console.log(`getFriends axios > FriendsList:`, res)
                setFriendState(res.data)
                // console.log(`setFriendState:`, friendState);
            })
            .catch(err => console.log(`ERROR: getFriends axios > FriendsList:`, err))
    }, [])

    return(
        <FriendContext.Provider value={[ friendState, setFriendState ]}>
            <div>
                <h2>All Friends</h2>
                <FriendForm />
                {friendState.map((friend) => 
                    <Friend key={friend.id} props={friend} />
                )}
            </div>
        </FriendContext.Provider>
    )
}
export default FriendsList;