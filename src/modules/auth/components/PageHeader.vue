<template>
    <header class="logo">
        <img 
            src="@/assets/img/logo.png" 
            alt="Logo Medical" 
            class="logo__img"
        >
        <h1 class="logo__title">Medical<span style="color: var(--color-secundary);">.</span></h1>
    </header>
</template>

<style scoped>
    .logo {
        display: flex;
        align-items: center;
        height: 10.4rem;
        padding-left: 3.2rem;
    }
    .logo__img {
        width: 4rem;
        height: 4rem;
    }
    .logo__title {
        color: var(--color-primary);
        font-size: 2rem;
    }
</style>