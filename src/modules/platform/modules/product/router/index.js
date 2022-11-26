export default {
    name: 'product',
    component: () => import('../layouts/ProductLayout.vue'),
    children: [
        
        {
            path: 'lista-productos',
            name: 'list-products',
            component: () => import('../views/ListProducts.vue')
        },
        {
            path: 'nuevo-producto',
            name: 'new-product',
            component: () => import('../views/NewProduct.vue')
        },
        {
            path: 'editar-producto/:id',
            name: 'update-product',
            component: () => import('../views/UpdateProduct.vue'),
            props: (route) => { 
              const id = Number( route.params.id )
              return isNaN( id ) ? { id: 1} : { id } 
            }
          },
          {
              path: 'info-producto/:id',
              name: 'info-product',
              component: () => import('../views/InfoProduct.vue'),
              props: (route) => { 
                const id = Number( route.params.id ) 
              }
            }
    ]    
}