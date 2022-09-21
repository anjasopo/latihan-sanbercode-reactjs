import React from 'react';

const Welcome = (props) => {
    console.log(props.name)
    return<div>Halo lagi {props.name}</div>
}

export default Welcome