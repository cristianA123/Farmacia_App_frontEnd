export default {
    name: 'auth',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: 'registro',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        }
    ]    
}