import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = props =>{
    return(
        <Link to={`${props.route}`} style={{ textDecoration: 'none', color: '#212121' }}>
            { props.children }
        </Link>
    )
}

export default LinkComponent;