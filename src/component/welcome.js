import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = (props) => {
    return (
        <div className='container'>
            Welcome to New Application...
            {props.match.params.name}

            <Link to='/todo'>ToDo</Link>
        </div>
    )
}

export default Welcome;