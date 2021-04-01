import api from './api-config';

export const getAllPostsComments = async (id) => {
    const resp = await api.get(`/posts/${id}/comments`)
    return resp.data
}

export const postPostComment = async (id) => {
    const resp = await api.post(`/posts/${id}/comments`)
    return resp.data
}

export const destroyComment = async (id) => {
    const resp = await api.delete(`/comments/${id}`)
    return resp
}