import React from 'react';
import './Post.css'

function Post(props) {
    const { post } = props
    // console.log(post);
    
    return post.user ? (
        <div className='post-container'>
            <div className='post-username-container'>
                <div>{post.user.username}</div>
            </div>
            
            <img className='post-img' src={post.img_url} alt=""/>
            
            <div className='post-content-container'>
                <div className='post-content'>{post.content}</div>
                {post.comments.length ? 
                <div className='post-comments-container'>
                    {post.comments.map((comment) => (
                        <div key={comment.id} className='post-comment'>{comment.content}</div>
                    ))}
                </div> : <div>No Comments</div>}
            </div>
        </div>
    ) : <div>Loading...</div>
}

export default Post;