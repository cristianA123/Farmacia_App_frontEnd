<script setup>
    import useCategory from '../composables/useCategory';
    import useUser from '../composables/useUser';

    const { deleteCategary } = useCategory();
    const { getUserData } = useUser();
    const { role } = getUserData()

    const props = defineProps({
        category: {
            type: Object,
            required: true
        }
    })
    
</script>

<template>
    <article class="product">
        <h2 class="product__name"> {{ props.category.name }} </h2>
        <div class="actions" v-show="role=='client'? false:true">
            <!-- <img src="@/assets/icons/edit.png" alt="" class="actions__icon edit" @click="goToUpdateProduct(props.category._id)"> -->
            <img src="@/assets/icons/delete.png" alt="" class="actions__icon delete" @click="deleteCategary(props.category._id)">
        </div>
    </article>
</template>

<style scoped>
.product{
    width: 10px;
    height: 10px;
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
.product__name {
    font-size: 3.5rem;
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