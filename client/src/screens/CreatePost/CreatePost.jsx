import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postPost } from '../../services/posts';


export default function CreatePost(props) {
    const history = useHistory()
    const { setAllPosts, currentUser } = props
    
    const [postData, setPostData] = useState({
        content: '',
        img_url: ''
    })
    
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

    return (
        <form onSubmit={handleSubmit}>
        <h3>Create Post</h3>
        <label>
            Image Url:
            <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handlePostChange}
            />
        </label>
        <label>
            Status:
            <input
            type='text'
            name='content'
            value={content}
            onChange={handlePostChange}
            />
        </label>
        <button>Submit</button>
        </form>
    )
}
