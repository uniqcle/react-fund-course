import Posts from '../pages/Posts';
import About from '../pages/About'
import Errors from '../pages/Errors';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const privateRoutes = [
    { path: '/', component: Posts, exact: true },
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostIdPage, exact: true }
]

export const publicRoutes = [
    { path: '/login', component: Login, exact: true },
    { path: '/about', component: About, exact: true },
]