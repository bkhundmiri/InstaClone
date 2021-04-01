import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postPost } from '../../services/posts';


export default function CreatePost(props) {
    const history = useHistory()
    const { setAllPosts } = props
    const [postData, setPostData] = useState({
        content: '',
    })
    const [pictureData, setPictureData] = useState({
        img_url: '',
    })
    const { content } = postData
    const { img_url } = pictureData
    
    const handlePictureCreate = async (pictureData) => {
        const newPicture = await postPost(pictureData);
        setAllPosts(prevState => [...prevState, newPicture]);
    }

    const handlePostCreate = async (postData) => {
        const newPost = await postPost(postData);
        setAllPosts(prevState => [...prevState, newPost]);
        history.push('/feed');
    }

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevState => ({
        ...prevState,
        [name]: value
        }))
    }

    const handlePictureChange = (e) => {
        const { name, value } = e.target;
        setPictureData(prevState => ({
        ...prevState,
        [name]: value
        }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handlePictureCreate(pictureData);
            handlePostCreate(postData);
        }}>
        <h3>Create Post</h3>
        <label>
            Image Url:
            <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handlePictureChange}
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
