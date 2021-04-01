import api from './api-config';

export const getAllPostsComments = async (id) => {
    const resp = await api.get(`/posts/${id}/comments`)
    return resp.data
}