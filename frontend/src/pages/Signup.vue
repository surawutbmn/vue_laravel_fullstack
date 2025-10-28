<script setup>
import GuestLayout from "../components/GuestLayout.vue";



components: { GuestLayout }</script>

<template>
    <guest-layout>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-violet-400">Create new account
            </h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-4" action="#" method="POST">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-500">Full name</label>
                    <div class="mt-2">
                        <input name="name" id="name" required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-500">Email address</label>
                    <div class="mt-2">
                        <input type="email" name="email" id="email" autocomplete="email" required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" name="password" id="password" required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="passwordConfirmation" class="block text-sm font-medium text-gray-500">Confirm
                            password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" name="password" id="passwordConfirmation" required=""
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm" />
                    </div>
                </div>
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
    </guest-layout>
</template>

<style scoped>
form {
    @apply bg-slate-300 rounded-md p-5 shadow-md
}

h2 {
    font-size: 1.875rem;
}

input,
button {
    transition: all 0.2s ease-in-out;
}

input:focus,
button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
}

button {
    background-color: #6366f1;
    border-radius: 0.375rem;
    padding: 12px 0;
}

button:hover {
    background-color: #4f46e5;
}

button:focus-visible {
    outline: 2px solid #4f46e5;
}

input {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    border-radius: 0.375rem;
    color: #333;
    /* Dark text color for better contrast */
    caret-color: #6366f1;
    /* Custom cursor (caret) color */
}

input::placeholder {
    color: #6b7280;
}
</style>