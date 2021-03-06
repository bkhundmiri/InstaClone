import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { destroyPost, getOnePost } from "../../services/posts";

import Post from "../../components/Post/Post";

export default function FoodDetails(props) {
  const [onePost, setOnePost] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  const { currentUser, setAllPosts } = props;

  useEffect(() => {
    const fetchOnePost = async () => {
      const postData = await getOnePost(id);
      setOnePost(postData);
    };
    fetchOnePost();
  }, [id]);

  const handleDelete = async () => {
    await destroyPost(id);
    setAllPosts((prevState) => prevState.filter((post) => post.id !== id));
    history.push(`/profile`);
  };

  return onePost ? (
    <>
      <Post
        post={onePost}
        currentUser={currentUser}
        handleDelete={handleDelete}
      />
    </>
  ) : (
    <div>Loading...</div>
  );
}
