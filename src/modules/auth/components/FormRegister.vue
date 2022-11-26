<script setup>
    import { reactive } from 'vue';
    import useAuth from '../composables/useAuth.js';
    
    const { registerUser } = useAuth()
    const data = reactive({
        name: '',
        lastname: '',
        email: '',
        password: '',
    });

</script>

<template>
    <form 
        class="form"
        @submit.prevent="registerUser( data )"
    >
        <div class="form__inputs">
            <div class="input__item">
                <label for="name">Nombre:</label>
                <input 
                    type="text"
                    name="name" 
                    placeholder="Ej: Jose" 
                    v-model="data.name"
                >
            </div>
            <div class="input__item">
                <label for="lastname">Apellidos:</label>
                <input 
                    type="text"
                    name="lastname" 
                    placeholder="Ej: Navarro" 
                    v-model="data.lastname"
                >
            </div>
            <div class="input__item">
                <label for="user">Email:</label>
                <input 
                    type="text"
                    name="user" 
                    placeholder="Ej: prueba@ejemplo.com" 
                    v-model="data.email"
                >
            </div>
            <div class="input__item">
                <label for="user">Contraseña:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    v-model="data.password"
                >
            </div>
        </div>
        <div class="form__actions">
            <button 
                class="action__register" 
                type="submit"
            >
                Registrarme
            </button>
        </div>
    </form>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
    .form__inputs {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }
    .input__item {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    label {
        font-size: 1.6rem;
        font-weight: 500;
    }
    input {
        padding: 16px 16px;
        border: 1px solid var(--text-inactive);
        border-radius: 8px;
        width: 28rem;
        font-weight: 400;
        display: flex;
    }
    input::placeholder {
        color: var(--text-inactive);
        font-weight: 400;
    }
    input:focus {
        outline: 1.6px solid var(--vt-c-divider-dark-1)
    }
    .action__register {
        width: 28rem;
        padding: 16px 16px;
        border: none;
        background-color: #F1FAFF;
        color: var(--color-primary);
        font-size: 1.6rem;
        font-weight: 500;
        cursor: pointer;
        border-radius: 8px;
        transition: color .4s ease-in-out, background-color .4s ease-in-out;
    }
    .action__register:hover {
        background-color: var(--color-primary);
        color: #F1FAFF;
        transition: color .4s ease-in-out, background-color .4s ease-in-out;
    }
</style>