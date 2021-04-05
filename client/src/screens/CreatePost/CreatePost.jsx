import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postPost } from '../../services/posts';

import { BsFillImageFill } from 'react-icons/bs'

import './CreatePost.css'

export default function CreatePost(props) {
    const history = useHistory()
    const { setAllPosts } = props
    
    const [postData, setPostData] = useState({
        content: '',
        img_url: ''
    })
    const [imgLoaded, setImgLoaded] = useState(false)
    
    const { content, img_url } = postData

    const handlePostCreate = async (postData) => {
        const newPost = await postPost(postData);
        setAllPosts(prevState => [...prevState, newPost]);
        history.push('/feed');
    }

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePostCreate(postData)
    }

    const handleImgLoaded = () => {
        setImgLoaded(true)
    }

    return (
        <>
            <h3>Create A New Post</h3>
            <div className='img-preview'>
                {imgLoaded ? 
                <img className='create-img' src={postData.img_url} alt='New Post'/>
                : <BsFillImageFill size='350px' color='gray'/>}
            </div>
            <form className='post-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='img_url'
                    value={img_url}
                    onChange={handlePostChange}
                    onBlur={handleImgLoaded}
                    placeholder='Image URL'
                    required
                />
                <input
                    type='textarea'
                    name='content'
                    value={content}
                    onChange={handlePostChange}
                    placeholder='Write a caption...'
                />
                <button className='create-form-button' disabled={!img_url}>Share</button>
            </form>
        </>
    )
}
