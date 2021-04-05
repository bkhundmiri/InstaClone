import React from 'react';
import './Post.css'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Modal from "../../components/Modal/Modal";

function Post(props) {
    const { post, currentUser, open, setOpen, handleDelete } = props
    
    return post.user ? (
        <div className='post-container'>
            <div className='post-username-container'>
                <Link to=''>
                    {post.user?.img_url ? 
                    <img className='post-user-img' src={post.user?.img_url} alt=""/>
                    : 
                    <FaUserCircle size='30px' color='white'/>}
                </Link>
                <Link to=''>{post.user.username}</Link>
                <div>
                {
                    currentUser?.id === post.user_id &&
                    <>
                        <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                        <button onClick={() => setOpen(post.id)}>delete</button>
                    </>
                }
                {open && (
                    <Modal
                        open={open}
                        setOpen={setOpen}
                        handleDelete={handleDelete}
                    />
                )}
                </div>
            </div>
            
            <img className='post-img' src={post.img_url} alt=""/>
            
            <div className='post-content-container'>
                <div className='post-username'>{post.user?.username}</div>
                <div className='post-content'>{post.content}</div>    
            </div>
            <div className='post-comments-container'>
                {post.comments.length ? 
                <Link to=''>View all {post.comments.length} comments</Link> 
                : <div>No Comments</div>}
                <Link to=''>Add a comment...</Link>
            </div>
        </div>
    ) : <div>Loading...</div>
}

export default Post;