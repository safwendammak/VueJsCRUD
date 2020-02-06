<template>
    <div>
        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
            </div>
        </div>
        <br/>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="post.id" v-for="post in posts">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.updated_at }}</td>
                <td>
                    <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit
                    </router-link>
                    <button @click.prevent="deletePost(post.id)" class="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {APIService} from "../shared/APIService";

    const apiService = new APIService();

    export default {
        mounted() {
            this.getPosts();
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            getPosts() {
                apiService.getPosts().then((data) => {
                    this.posts = data.data;
                });
            },
            deletePost(id) {
                apiService.deletePost(id).then((data) => {
                    // Loop because multi dimensional array
                    for (var i = 0; i < this.posts.length; i++) {
                        if (this.posts[i].id === id) {
                            break;
                        }
                    }
                    this.posts.splice(i, 1);
                });
            }
        }
    }
</script>
