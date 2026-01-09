<template>
    <div>
        <label for="email" class="block text-[1rem]font-medium text-indigo-400">{{ label }}</label>
        <div class="mt-2">
            <input :type="type" :name="label.toLowerCase()" :id="label.toLowerCase()"
                :autocomplete="label.toLowerCase()" :value="modelValue" required=""
                @input="emit(`update:modelValue`, $event.target.value)" class="sm:text-sm" />
            <p v-if="error" class="text-sm mt-1 text-red-600">
                {{ error }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue'])
</script>
<style scoped>
input {
    @apply transition-all duration-200 ease-in-out;
}

input:focus {
    @apply outline-none ring-2 ring-indigo-500;
}

input {
    @apply block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 ring-1 ring-gray-300 p-2 caret-indigo-500;
}

input::placeholder {
    @apply text-gray-500;
}
</style>