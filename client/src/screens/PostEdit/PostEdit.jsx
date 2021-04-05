import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { putPost } from "../../services/posts";

import { BsFillImageFill } from "react-icons/bs";

function PostEdit(props) {
  const [formData, setFormData] = useState({
    img_url: "",
    content: "",
  });

  const { img_url, content } = formData;
  const { allPosts, setAllPosts } = props;
  const { id } = useParams();
  const history = useHistory();

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
    setAllPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    history.push("/feed");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h3>Edit Your Post</h3>
      <div className="img-preview">
        {formData.img_url ? (
          <img className="create-img" src={formData.img_url} alt="New Post" />
        ) : (
          <BsFillImageFill size="350px" color="gray" />
        )}
      </div>

      <form
        className="post-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Write a caption..."
        />
        
        <button className="create-form-button" disabled={!formData.img_url}>
          Save Changes
        </button>
      </form>
    </>
  );
}

export default PostEdit;
