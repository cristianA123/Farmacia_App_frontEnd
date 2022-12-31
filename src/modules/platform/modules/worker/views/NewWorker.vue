<template>
  <section class="add_worker">
    <div class="categorys">
      <span class="categorys__title">Registrar colaborador</span>
    </div>
    <form class="form" @submit.prevent="addUser(data)">
      <div class="form__inputs">
        <div class="input__item">
          <label for="name">Nombre <span>*</span></label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            v-model="data.name"
          />
        </div>
        <div class="input__item">
          <label for="lastname">Apellidos <span>*</span></label>
          <input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            v-model="data.lastname"
          />
        </div>

        <div class="input__item">
          <label for="email">Correo <span>*</span></label>
          <input
            type="text"
            name="email"
            placeholder="Correo electronico"
            v-model="data.email"
          />
        </div>

        <div class="input__item">
          <label for="lastname">Contraseña <span>*</span></label>
          <input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            v-model="data.password"
          />
        </div>
        <div class="input__item">
          <label for="lastname">Empresa <span></span></label>
          <input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            v-model="data.empresa"
          />
        </div>

        <div class="input__item">
          <label for="lastname">Role <span></span></label>
          <select v-model="data.role" class="form-select">
            <option value="superAdmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="client">Cliente</option>
          </select>
        </div>

      </div>
      <div class="form__actions">
        <button type="submit" class="action__save">
          Registrar colaborador
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import useUser from "../composables/useUser";

const { addUser } = useUser();
const data = reactive({
  name: "",
  lastname: "",
  email: "",
  password: "",
  empresa: "",
  role: "",
});
</script>

<style scoped>
.add_worker {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
}
.categorys {
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
.categorys__title {
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
.input__item label span {
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
  outline: 1.6px solid var(--vt-c-divider-dark-1);
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
  background-color: #f1faff;
  border: none;
  color: var(--color-primary);
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
