<script setup>
    const userInfo = localStorage.getItem('user')
    const { name, lastname ,role} = JSON.parse(userInfo)

</script>

<template>
    <header class="header">
        <nav class="nav">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="Logo Medical" class="logo__img">
                <h1 class="logo__title">Medical<span style="color: var(--color-secundary);">.</span></h1>
            </div>
            <div class="nav__search">
                <input type="text" name="search" id="search" class="search__input" placeholder="Buscar producto...">
                <img src="@/assets/icons/search.svg" alt="Search Icon" class="search__img">
            </div>
            <div class="nav__user">
                <div class="user__icons">
                    <img src="@/assets/icons/notification.svg" alt="Notificaciones">
                    <img src="@/assets/icons/setting.svg" alt="Ajustes">
                </div>
                <div class="user__separator">
                </div>
                <div class="user__details">
                    <div class="details__info">
                        <span class="info__name"> {{ name }} {{ lastname }}</span>
                        <span class="info__rol">{{role == "client" ? "Cliente" : "Administrador"}}</span>
                    </div>
                    <img src="@/assets/img/user.png" alt="User Image" class="details__img">
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.header {
    background-color: var(--background-component-color);
    height: 70px;
    width: 100%;
    box-shadow: var(--shadow);
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 3.2rem;

}
.logo {
    display: flex;
    align-items: center;
}
.logo__title {
    color: var(--color-primary);
    font-size: 1.6rem;
}
.nav__search {
    width: 38rem;
    position: relative;
    display: flex;
    align-items: center;
}
.search__input {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--text-inactive);
    /* color: var(--text-inactive); */
}
.search__input:focus {
    outline: none;
}
.search__input::placeholder {
    color: var(--text-inactive);
}
.search__img {
    position: absolute;
    right: 10px;
    width: 2rem;
}
.nav__user {
    display: flex;
    gap: 2.4rem;
    align-items: center;
}
.user__icons {
    display: flex;
    align-items: center;
    gap: 1.6rem;
}
.user__separator{
    width: 1px;
    height: 4rem;
    background-color: var(--color-acentuacion);
}
.user__details {
    display: flex;
    align-items: center;
    gap: 1.6rem;
}
.details__info{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.info__name {
    color: var(--color-primary);
    font-weight: 500;
}
.info__rol {
    color: var(--text-inactive);
    font-size: 1.5rem;
}
.details__img {
    width: 4rem;
    border-radius: 50%;
}
</style>