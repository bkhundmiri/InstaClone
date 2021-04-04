import React from 'react';
import { Link } from 'react-router-dom'
import './Layout.css'

import { FiPlusSquare } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'

function Layout(props) {

    const { currentUser } = props;
    return (
        <>
            <nav>
                <div className='logo-title'>InstaClone</div>
            </nav>
            <div className='props-children-container'>
                {props.children}
            </div>
            <footer>
                <Link to='/feed'><div><HiHome/></div></Link>
                <Link to='/posts/new'><div><FiPlusSquare/></div></Link>
                {/* <Link to='/users/search'><div>Search User</div></Link> */}
                <Link to='/profile'>
                    {currentUser.img_url ? <img className='profile-pic-footer' src={currentUser.img_url} alt="profile-pic"/> : <BsFillPersonFill/> }
                </Link>
            </footer>
        </>
    );
}

export default Layout;