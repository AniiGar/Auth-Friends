import React from 'react';

const Friend = (props) => {

    // console.log('Friends props passed:', props);

    return(
        <div>
            <h3>Name: {props.props.name}</h3>
            <p>Age: {props.props.age}</p>
            <p>Email: {props.props.email}</p>
        </div>
    )
}
export default Friend;