<script setup>
    import useProduct from '../composables/useProduct';
    import useUser from '../composables/useUser';

    const { deleteProduct, goToUpdateProduct ,goToInfoProduct} = useProduct();
    const { getUserData } = useUser();
    const { role } = getUserData()

    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
    
    console.log(props.product._id)
</script>

<template>
    <article class="product">
        <img :src="props.product.imagen" alt="" class="product__img" @click="goToInfoProduct(props.product._id)">
        <div class="product__info">
            <span class="product__name"> {{ props.product.nombre }} </span>
            <div class="product__details">
                <div class="details__lab">
                   <img src="@/assets/icons/bag-2.svg" alt="" class="lab__icon" >
                    <span class="lab__name"> {{ props.product.laboratorio }} </span>    
                </div>
                <span class="details__price"> S/. {{ props.product.precio }} </span>
            </div>
        </div>
        <div class="actions" v-show="role=='client'? false:true">
            <img src="@/assets/icons/edit.png" alt="" class="actions__icon edit" @click="goToUpdateProduct(props.product._id)">
            <img src="@/assets/icons/delete.png" alt="" class="actions__icon delete" @click="deleteProduct(props.product._id)">
        </div>
    </article>
</template>

<style scoped>
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