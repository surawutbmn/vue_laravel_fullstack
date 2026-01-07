<script setup>
import { RouterLink } from "vue-router";
import GuestLayout from "../components/GuestLayout.vue";
import axiosClient from "../axios";
import router from "../router.js";
import { ref } from "vue";

const data = ref({
    email: '',
    password: ''
})

const errors = ref({
    email: [],
    password: []
})

const errorMessage = ref('')

function submit() {
    axiosClient.get('/sanctum/csrf-cookie').then(response => {
        axiosClient.post("/login", data.value)
            .then(response => {
                router.push({ name: 'Home' })
            })
            .catch(error => {
                console.log(error.response)
                errorMessage.value = 'Your Email or Password is incorrect';
            })
    });
}


components: { GuestLayout }</script>

<template>
    <guest-layout>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-violet-400">Login to your account
            </h2>
            <div v-if="errorMessage" class="mt-4 py-2 px-3 rounded text-white bg-red-400">
                {{ errorMessage }}
            </div>

        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <label for="email" class="block text-[1rem]font-medium text-indigo-400">Email address</label>
                    <div class="mt-2">
                        <input type="email" name="email" id="email" autocomplete="email" required=""
                            v-model="data.email" class="sm:text-sm" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-[1rem] font-medium text-indigo-400">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot
                                password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input type="password" name="password" id="password" autocomplete="current-password" required=""
                            v-model="data.password" class="sm:text-sm" />
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Login
                    </button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm/6 text-gray-400">
                Not a member?
                {{ ' ' }}
                <RouterLink :to="{ name: 'Signup' }" class="font-semibold text-indigo-400 hover:text-indigo-300">create
                    account</RouterLink>
            </p>
        </div>
    </guest-layout>
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