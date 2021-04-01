import api from './api-config';

export const postPicture = async (post_id, pictureData) => {
    const resp = await api.post(`/posts/${post_id}/pictures`, { picture: pictureData })
    return resp.data
}

