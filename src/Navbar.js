import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar=()=>{

    return(
        <div className='group-items'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
            <li>
                <Link to='/Blogs'>Blog</Link>
            </li>
            <li>
                <Link to='/Feeds'>Feeds</Link>
            </li>
        </div>
    )
}
export default Navbar;