<script setup>
    import { ref, reactive, onMounted} from 'vue';
    import useCategory from '../composables/useCategory';
    
    const { addCategary,cancelActions } = useCategory();
    const data = reactive({
        name: '',
    })

</script>
    
<template>
    <section class="section__adduser">
        <div class="categorys">
            <span class="categorys__title">Nueva Categoria</span>
        </div>
        <form class="form" @submit.prevent="addCategary(data)">
            <div class="form__inputs">
                <div class="input__item">
                    <label for="name">Nombre <span>*</span></label>
                    <input type="text" name="name" placeholder="Nombre del producto" v-model="data.name" >
                </div>
            </div>
            <div class="form__actions">
                <button class="action__cancel" @click.prevent="cancelActions">
                    Cancelar
                </button>
                <button type="submit" class="action__save">
                    Agregar producto
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