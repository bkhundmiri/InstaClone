import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { putPost } from "../../services/posts";

function PostEdit(props) {
  const [formData, setFormData] = useState({
    img_url: "",
    content: "",
  });

  const { img_url, content } = formData;
  const { allPosts, setAllPosts } = props;
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    const prefillFormData = () => {
      const post = allPosts.find((post) => post.id === Number(id));
      setFormData({
        img_url: post.img_url,
        content: post.content,
      });
    };
    if (allPosts.length) {
      prefillFormData();
    }
  }, [allPosts, id]);

  const handleUpdate = async () => {
    const updatedPost = await putPost(id, formData);
    setAllPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/feed');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Food</h3>
      <label>
        Image URL:
        <input type="text" name="img_url" value={img_url} onChange={handleChange} />
      </label>
      <label>
        Content:
        <input type="text" name="content" value={content} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default PostEdit;
