import React from 'react';

export default ({ person }) => (
    <div>
        <p>User: <b>{person.firstName + ' ' + person.lastName}</b></p>
        <p>
            Description: <br />
            <textarea defaultValue={person.description} />
        </p>
        <p>Address: <b>{person.address.streetAddress}</b> </p>
        <p>City: <b>{person.address.city}</b> </p>
        <p>State: <b>{person.address.state}</b></p>
        <p>Zip: <b>{person.address.zip}</b></p>
    </div>
)