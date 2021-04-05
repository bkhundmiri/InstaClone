import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { destroyPost, getOnePost } from '../../services/posts';

import Post from "../../components/Post/Post"
import Modal from "../../components/Modal/Modal"

export default function FoodDetails(props) {
    const [onePost, setOnePost] = useState(null);
    const [open, setOpen] = useState(false)

    const { id } = useParams()
    const history = useHistory()

    const { currentUser, setAllPosts } = props;

    useEffect(() => {
        const fetchOnePost = async () => {
            const postData = await getOnePost(id);
            setOnePost(postData);
        }
        fetchOnePost()
    }, [id])

    const handleDelete = async () => {
        await destroyPost(id);
        setAllPosts(prevState => prevState.filter(post => post.id !== id))
        history.push(`/profile`);
    }

    return onePost ? (
        <div>
            {/* <div>{onePost.user.username}</div>
            
            <img src={onePost.img_url} alt=''/>
            <div>{onePost.content}</div>
            {onePost.comments.length ? 
            <div>
                {onePost.comments.map((comment) => (
                    <div>{comment.content}</div>
                ))}
            </div> : <div>No Comments</div>} */}
            <div>
            {
                currentUser?.id === onePost.user_id &&
                <>
                    <Link to={`/posts/${onePost.id}/edit`}><button>Edit</button></Link>
                    <button onClick={() => setOpen(onePost.id)}>delete</button>
                </>
            }
            </div>
            <Post post={onePost} />
            {open && (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    ) : <div>Loading...</div>
}
