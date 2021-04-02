import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postPicture } from '../../services/pictures';
import { postPost } from '../../services/posts';


export default function CreatePost(props) {
    const history = useHistory()
    const { setAllPosts, currentUser } = props
    const [ postId, setPostId ] = useState(null)
    
    const [postData, setPostData] = useState({
        content: '',
    })
    
    const [pictureData, setPictureData] = useState({
        img_url: '',
    })
    
    const { content } = postData
    const { img_url } = pictureData

    const handlePostCreate = async (postData) => {
        const newPost = await postPost(postData);
        setPostId(newPost.id);
        // setPostId 
        setAllPosts(prevState => [...prevState, newPost]);
        history.push('/feed');
    }
    
    const handlePictureCreate = async (pictureData) => {
        const newPic = await postPicture(pictureData);
        setPictureData(newPic)
    }

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevState => ({
            ...prevState,
            [name]: value,
            user_id: currentUser.id
        }))
    }

    const handlePictureChange = (e) => {
        const { name, value } = e.target;
        setPictureData(prevState => ({
            ...prevState,
            [name]: value,
            post_id: postId
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePostCreate(postData)
        handlePictureCreate(pictureData)
    }

    // const handleCreate = async (postData, post_id, pictureData) => {
    //     const newPost = await postPost(postData);
        
    //     setPostId(newPost.id);
    //     setAllPosts(prevState => [...prevState, newPost]);
        
    //     await postPicture(post_id, pictureData);
    //     history.push('/feed');
    // }
    

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setPostData(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //         user_id: currentUser.id
    //     }))
    //     setPictureData(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //         post_id: postId
    //     }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     handleCreate(postData, postId, pictureData)
    // }

    return (
        <form onSubmit={handleSubmit}>
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
