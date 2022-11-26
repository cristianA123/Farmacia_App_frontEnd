import isAuthenticatedGuard from '../../auth/router/auth-guard.js'
import productRouter from '../modules/product/router/index.js'
import workerRouter from '../modules/worker/router/index.js'
export default {
    name: 'platform',
     path:'/platform',
            beforeEnter: [ isAuthenticatedGuard ],
            redirect:'/platform/product/lista-productos',        
    component: () => import('../layouts/PlatformLayout.vue'),
    children: [
        
        {
            path :'/platform/product/',
            ...productRouter
        },
        {
            path :'/platform/worker/',
            ...workerRouter
        }
    ]    
}