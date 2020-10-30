import React from 'react';

const Person = ({theOne}) => {

const {id,image,name,title} = theOne[0];
    console.log(id)
    return (
        <div>
            {id}
            <img src={image} alt={id} />
            {name}
            {title}
        </div>
    )
}

export default Person