<template>
    <div>
        <h1>Create A Post</h1>
        <form @submit.prevent="addPost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Title:
                            <input class="form-control" type="text" v-model="post.title">
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Body:
                            <textarea class="form-control" rows="5" v-model="post.body"></textarea>
                        </label>
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {APIService} from "../shared/APIService";

    const apiService = new APIService();
    export default {
        data() {
            return {
                post: {}
            }
        },
        methods: {
            addPost() {
                apiService.addPost(this.post).then((data) => {
                    this.$router.push({name: 'posts'});
                });
            }
        }
    }
</script>
