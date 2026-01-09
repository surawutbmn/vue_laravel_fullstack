<script setup>
import { ref } from "vue";
import axiosClient from "../../axios";
import GuestLayout from "../../components/layouts/GuestLayout.vue";
import AuthInput from "../../components/auth/AuthInput.vue";

const email = ref("");
const status = ref("");
const error = ref("");

function submit() {
    status.value = "";
    error.value = "";

    axiosClient.post("/forgot-password", { email: email.value })
        .then(response => {
            status.value = "Password reset link sent to your email.";
        })
        .catch(err => {
            console.log(err.response.data);

            error.value = err.response?.data?.message || "Something went wrong.";
        });
}
</script>

<template>
    <GuestLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold text-violet-400">
                Forgot your password?
            </h2>

            <p class="mt-2 text-center text-sm text-gray-400">
                Enter your email and we’ll send you a reset link.
            </p>

            <div v-if="status" class="mt-4 bg-green-500 text-white p-2 rounded">
                {{ status }}
            </div>

            <div v-if="error" class="mt-4 bg-red-500 text-white p-2 rounded">
                {{ error }}
            </div>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submit" class="space-y-6">
                <AuthInput label="Email" type="email" v-model="email" />
                <button type="submit" class="w-full rounded-md bg-indigo-500 py-2 text-white hover:bg-indigo-400">
                    Send Reset Link
                </button>
            </form>
        </div>
    </GuestLayout>
</template>

<style scoped></style>