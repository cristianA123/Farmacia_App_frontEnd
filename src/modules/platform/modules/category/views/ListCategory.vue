<script setup>
    import { ref, onMounted } from 'vue'
    // import useProduct from '../composables/useProduct'
    // import ProductCard from '../components/ProductCard.vue'

    const products = ref([])
    // const { getProducts } = useProduct();

    onMounted( async () => {
        // products.value = await getProducts()
    })
    
</script>
    
<template>
    <section class="products__container">
           <div class="categorys">
               <span class="categorys__title">Tus categorias</span>
           </div>
           <section class="products">
               <ProductCard 
                v-for="product in products" 
                :key="product.id" 
                :product="product" 
               />
           </section>
       </section>
</template>
    
<style scoped>
   
    .categorys{
        width: 100%;
        background-color: var(--background-component-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3.2rem;
        border-radius: 10px;
        box-shadow: var(--shadow);
        height: 8rem;
    }
    .categorys__title{
        color: var(--color-primary);
        font-size: 2.4rem;
        font-weight: 700;
    }
    .categorys__navbar{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .nav__menu{
        display: flex;
        gap: 3.2rem;
        list-style: none;
    }
    .menu__item{
        padding: 10px;
        color: var(--text-inactive);
        cursor: pointer;
        border-radius: 8px;
    }
    .active {
        color: var(--text-color);
        background-color: var(--background-active-category);
    }
    .products{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 3.2rem auto;
        gap: 3.2rem;
    }
    .product{
        width: 239px;
        height: 312px;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        background-color: var(--background-component-color);
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
        position: relative;
    
    }
    .product__img{
        width: 16rem;
        height: 16rem;
        object-fit: cover;
    }
    .product__info{
        width: 191px;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        text-align: justify;
        /* white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; */
    }
    .product__details{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .details__lab{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .lab__name{
        color: var(--color-primary);
        font-size: 1.3rem;
    }
    .details__price{
        color: var(--color-secundary);
    }
    .actions{
        position: absolute;
        top: 12px;
        left: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .actions__icon{
        width: 22px;
        object-fit: cover;
        cursor: pointer;
    }
</style>