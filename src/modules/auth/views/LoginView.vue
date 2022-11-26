<script setup>
    import FormLogin from '../components/FormLogin.vue'
</script>

<template>
    <section class="login">
        <article class="login__container">
            <header class="login__header">
                <h2 class="header__title">Hola de nuevo</h2>
                <p class="header__paragraph">Ingresa con tu cuenta para continuar</p>
            </header>
            <FormLogin/>
            <footer class="login__footer">
                <p class="footer__paragraph">¿No tienes una cuenta? 
                    <router-link 
                        :to="{  name: 'register' }"
                        class="footer__link"
                    >
                        Regístrate
                    </router-link>
                </p>
            </footer>
        </article>
    </section>
</template>

<style scoped>
    .login {
        width: 100%;
        height: calc(100% - 10.4rem);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login__container {
        display: flex;
        flex-direction: column;
        gap: 4.8rem;
    }
    .login__header {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    .header__title {
        font-size: 2.8rem;
        font-weight: 700;
    }
    .header__paragraph {
        font-size: 1.6rem;
        font-weight: 400;
    }
    .footer__paragraph {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center;   
    }
    .footer__link {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--color-acentuacion);
        text-decoration: none;
    }


</style>