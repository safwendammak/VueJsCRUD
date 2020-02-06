import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export class APIService {

    deletePost(id) {
        return axios.delete(API_URL + '/post/delete/' + id).then(response => response.data);
    }

    getPosts() {
        const url = `${API_URL}/posts`;
        return axios.get(url).then(response => response.data);
    }

    addPost(post) {
        const url = `${API_URL}/post/create`;
        return axios.post(url, post);
    }

    getPostByid(id) {
        const url = `${API_URL}/post/edit/`;
        return axios.get(url + id).then(response => response.data);
    }

    updatePost(post, id) {
        const url = `${API_URL}/post/update/`;
        return axios.post(url + id, post).then(response => response.data);
    }
}
