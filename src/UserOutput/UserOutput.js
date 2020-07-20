import React from 'react';

const UserOutput = (props)=>{
    return(
        <div>
            <p>Hey {props.name} how are you?</p>
            <p>This is good wheather today {props.name} isn`t it?</p>
        </div>
    )
}
export default UserOutput;