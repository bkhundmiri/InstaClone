import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { putPost } from "../../services/posts";
import { editUser } from "../../services/users";

function PostEdit(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        img_url: "",
        full_name: "",
        phone_number: "",
        location: "",
        birthday: "",
        bio: "",
    });

    const { username, email, img_url, full_name, phone_number, location, birthday, bio } = formData;
    const { currentUser, setCurrentUser } = props;
    const history = useHistory();

    useEffect(() => {
        const prefillFormData = () => {
            setFormData({
                username: currentUser.username,
                email: currentUser.email,
                img_url: currentUser.img_url,
                full_name: currentUser.full_name,
                phone_number: currentUser.phone_number,
                location: currentUser.location,
                birthday: currentUser.birthday,
                bio: currentUser.bio
            });
        };
        if (currentUser) {
            prefillFormData();
        }
    }, [currentUser]);

    const handleUpdate = async () => {
        const newUserData = await editUser(currentUser.id, formData);
        setCurrentUser((prevState) => ({
            ...prevState,
            newUserData
        }))
        history.push("/profile");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(currentUser.id, formData);
        }}
        >
            <h1>Edit Profile</h1>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Image URL:
                <input
                    type="text"
                    name="img_url"
                    value={img_url}
                    onChange={handleChange}
                />
            </label>
            <label>
                Full Name:
                <input
                    type="text"
                    name="full_name"
                    value={full_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="text"
                    name="phone_number"
                    value={phone_number}
                    onChange={handleChange}
                />
            </label>
            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </label>
            <label>
                Birthday:
                <input
                    type="date"
                    name="birthday"
                    value={birthday}
                    onChange={handleChange}
                />
            </label>
            <label>
                Bio:
                <input
                    type="textarea"
                    name="bio"
                    value={bio}
                    onChange={handleChange}
                />
            </label>
            <button disabled={!username || !email}>Submit</button>
        </form>
    );
}

export default PostEdit;
