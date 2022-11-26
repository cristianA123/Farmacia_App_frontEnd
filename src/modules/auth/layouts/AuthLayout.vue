<script setup>
    import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="auth">
        <article class="auth__container">
            <section class="auth__side">
                <img 
                    src="../assets/imgs/auth-img.png"
                    alt="Imagen de la vista de autenticación"
                    class="side_img"
                >
            </section>
            <section class="auth__side auth__side-page">
                <PageHeader/>
                <router-view 
                    class="auth__view"
                    v-slot="{ Component }" 
                >
                    <transition 
                        name="fade" 
                        mode="out-in"
                    >
                        <component :is="Component" />
                    </transition>
                </router-view>
            </section>
        </article>
    </div>
</template>

<style scoped>
    .auth {
        max-width: 1280px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    .auth__container {
        width: 100%;
        height: calc(100vh - 7.2rem);
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 1rem;
    }
    .auth__side {
        width: 50%;
        height: 100%;
    }
    .side_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0 0 10px;
    }
    .auth__side-page {
        box-shadow: 0px 2px 32px rgba(69, 68, 89, 0.08);
    }
</style>