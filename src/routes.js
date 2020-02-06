import CreateComponent from "./components/CreateComponent";
import ListComponent from "./components/ListComponent";
import EditComponent from "./components/EditComponent";
import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'create',
            path: '/create',
            component: CreateComponent
        },
        {
            name: 'posts',
            path: '/',
            component: ListComponent
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: EditComponent
        }
    ]
})
