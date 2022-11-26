<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useProduct from '../composables/useProduct';
import useCategory from '../composables/useCategory';

const { getProductById, updateProduct } = useProduct();
const { getCategories } = useCategory();

const route = useRoute()
const product = ref({})
const categories = ref([]);
const defaultCategory = ref(null);

onMounted( async () => {
    product.value = await getProductById( route.params.id )
    categories.value = await getCategories()
    setDefaultCategory()
})

const setDefaultCategory = () => {
    console.log(defaultCategory.value);
}
</script>


<template>
    <section class="section__adduser">

        <div class="categorys">
            <span class="categorys__title">Modificar producto</span>
        </div>
        <form 
            class="form" 
            @submit.prevent="updateProduct(product._id, product)"
        >
            <div class="form__inputs">
                <div class="input__item">
                    <label for="name">Nombre <span>*</span></label>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre del producto" 
                        v-model="product.nombre"
                    >
                </div>
                <div class="input__item">
                    <label for="precio">Precio <span>*</span></label>
                    <input 
                        type="number" 
                        placeholder="S/." 
                        v-model="product.precio" 
                    >
                </div>
                <div class="input__item">
                    <label for="descripcion">Descripción del producto <span>*</span></label>
                    <input 
                        type="text" 
                        name="descripcion" 
                        placeholder="Descripción..." 
                        v-model="product.descripcion" 
                    >
                </div>
                <div class="input__item">
                    <label for="laboratorio">Laboratorio <span>*</span></label>
                    <input 
                        type="text" 
                        name="laboratorio" 
                        placeholder="Laboratorio de origen" 
                        v-model="product.laboratorio"
                    >
                </div>
                <div class="input__item">
                    <label for="stock">Stock <span>*</span></label>
                    <input 
                        type="number" 
                        name="stock" 
                        placeholder="Unidades en stock" 
                        v-model="product.stock" 
                    >
                </div>
                <div class="input__item">
                    <label for="vencimiento">Fecha de vencimiento <span>*</span></label>
                    <input 
                        type="text" 
                        name="vencimiento" 
                        placeholder="DD/MM/AAAA" 
                        v-model="product.vencimiento" 
                    >
                </div>
                <div class="input__item">
                    <label for="imagen">Imagen <span>*</span></label>
                    <input 
                        type="text" 
                        name="imagen" 
                        placeholder="URL de imagen del producto" 
                        v-model="product.imagen" 
                    >
                </div>
                <div class="input__item">
                    <label for="category-select">Categoría <span>*</span></label>
                    <select 
                        name="categories" 
                        id="category-select"
                        v-model="product.categoria"
                    >
                        <option
                            v-for="category in categories"
                            :key="category._id"
                            :value="category._id"
                            ref="defaultCategory"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form__actions">
                <button 
                    class="action__cancel" 
                    @click="router.push({name: 'list-products'})"
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    class="action__save"
                >
                    Actualizar producto
                </button>
            </div>
        </form>
    </section>
</template>



<style scoped>
.section__adduser{
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
}
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
.form {
    width: 100%;
    background-color: var(--background-component-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: var(--shadow);
}
.form__inputs {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3.2rem 0;
}
.categorys__title{
    color: var(--color-primary);
    font-size: 2.4rem;
    font-weight: 700;
}
.input__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.input__item label {
    font-weight: 500;
    color: var(--color-heading);
}
.input__item label span{
    color: var(--color-secundary);
}
.input__item input {
    padding: 16px 16px;
    border: 1px solid var(--text-inactive);
    border-radius: 8px;
    width: 32rem;
    font-weight: 400;
}
.input__item input::placeholder {
    color: var(--text-inactive);
    font-weight: 400;
}
.input__item input:focus {
    outline: 1.6px solid var(--vt-c-divider-dark-1)
}
.form__actions {
    display: flex;
    gap: 64px;
    align-items: center;
    margin: 3.2rem 0;
}
.action__cancel {
    background: none;
    border: none;
    font-weight: 500;
    color: var(--color-secundary);
    cursor: pointer;
}
.action__save {
    background-color: #F1FAFF;
    border: none;
    color: var(--color-primary);
    padding: 10px 24px;
    border-radius: 8px;
    cursor: pointer;
}
select {
    padding: 16px 16px;
    border: 1px solid var(--text-inactive);
    border-radius: 8px;
    width: 32rem;
    font-weight: 400;
}
</style>