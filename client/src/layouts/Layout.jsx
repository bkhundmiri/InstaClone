import React from 'react';
import { Link } from 'react-router-dom'
import './Layout.css'

function Layout(props) {
    return (
        <>
            <nav>
                <div>InstaClone</div>
            </nav>
            <div className='props-children-container'>
                {props.children}
            </div>
            <footer>
                <Link to='/feed'><div>Home</div></Link>
                <Link to='/posts/new'><div>New Post</div></Link>
                {/* <Link to='/users/search'><div>Search User</div></Link> */}
                <Link to='/profile'><div>Profile</div></Link>
            </footer>
        </>
    );
}

export default Layout;