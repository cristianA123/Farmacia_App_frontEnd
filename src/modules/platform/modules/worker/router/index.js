export default {
    name: 'worker',
    component: () => import('../layouts/WorkerLayout.vue'),
    children: [
        {
            path: 'lista-colaboradores',
            name: 'list-workers',
            component: () => import('../views/ListWorkers.vue')
        },
        {
            path: 'add-worker',
            name: 'add-worker',
            component: () => import('../views/NewWorker.vue')
        }
    ]    
}