<script setup>
import GuestLayout from "../../components/layouts/GuestLayout.vue";
import { ref } from "vue";
import axiosClient from "../../axios";
import router from "../../router.js";
import AuthInput from "../../components/auth/AuthInput.vue";

const data = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const errors = ref({
    name: [],
    email: [],
    password: []
})

function submit() {
    axiosClient.get('/sanctum/csrf-cookie').then(response => {
        axiosClient.post("/register", data.value)
            .then(response => {
                router.push({ name: 'Home' })
            })
            .catch(error => {
                console.log(error.response.data)
                errors.value = error.response.data.errors;
            })
    });
}


components: { GuestLayout }</script>

<template>
    <GuestLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-violet-400">Create new account
            </h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submit" class="space-y-4">
                <AuthInput label="Name" type="text" id="name" autocomplete="name" v-model="data.name"
                    :error="errors.name ? errors.name[0] : ''" />
                <AuthInput label="Email" type="email" id="email" autocomplete="email" v-model="data.email"
                    :error="errors.email ? errors.email[0] : ''" />
                <AuthInput label="Password" type="password" id="password" autocomplete="password"
                    v-model="data.password" :error="errors.password ? errors.password[0] : ''" />
                <AuthInput label="Confirm Password" type="password" id="password_confirmation" autocomplete="password"
                    v-model="data.password_confirmation" />
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Sign up
                    </button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm/6 text-gray-400">
                Already have an account?
                {{ ' ' }}
                <RouterLink :to="{ name: 'Login' }" class="font-semibold text-indigo-400 hover:text-indigo-300">Login
                    here
                </RouterLink>
            </p>
        </div>
    </GuestLayout>
</template>

<style scoped>
form {
    @apply bg-slate-700 rounded-md p-5 shadow-md
}

h2 {
    font-size: 1.875rem;
}

input,
button {
    @apply transition-all duration-200 ease-in-out;
}

input:focus,
button:focus {
    @apply outline-none ring-2 ring-indigo-500;
}

button {
    @apply bg-indigo-500 rounded-md py-3;
}

button:hover {
    @apply bg-indigo-700;
}

button:focus-visible {
    @apply ring-2 ring-indigo-300;
}

input {
    @apply block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 ring-1 ring-gray-300 p-2 caret-indigo-500;
}

input::placeholder {
    @apply text-gray-500;
}
</style>