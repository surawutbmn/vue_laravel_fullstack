<script setup>
import { ref } from "vue";
import { PhotoIcon } from "@heroicons/vue/24/outline"

const data = ref({
    image: null,
    lebel: '',
    desccription: ''
})

const imagePreview = ref(null)

const onfileChange = (e) => {
    const file = e.target.files[0];
    data.value.image = file

    if (file) {
        imagePreview.value = URL.createObjectURL(file)
    }
}
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">
            Upload your image
        </h1>
        <form @submit.prevent="submit">
            <div class="space-y-12">
                <div class="border-b border-white/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            <label for="label" class="block text-sm/6 font-medium text-white">Lebel</label>
                            <div class="mt-2">
                                <div
                                    class="flex items-center rounded-md bg-white/5 pl-3 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                    <input type="text" name="label" id="label" v-model="data.label"
                                        class="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                                        placeholder="Image Lebel" />
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="file-upload" class="block text-sm/6 font-medium text-white">Image</label>
                            <div
                                class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                <div class="text-center">
                                    <PhotoIcon class="mx-auto size-12 text-gray-600" aria-hidden="true" />
                                    <div class="mt-4 flex text-sm/6 text-gray-400">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file"
                                                @change="onfileChange" class="sr-only" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                    <div v-if="imagePreview" class="mt-3">
                                        <img :src="imagePreview" alt="imagepreview" class="w-48 object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="desccription"
                                class="block text-sm/6 font-medium text-white">Describetion</label>
                            <div class="mt-2">
                                <textarea name="desccription" id="desccription" v-model="data.desccription" rows="3"
                                    class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
                            </div>
                            <p class="mt-3 text-sm/6 text-gray-400">Write a few sentences for this image.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <!-- <button type="button" class="text-sm/6 font-semibold text-indigo-400">Cancel</button> -->
                <button type="submit"
                    class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Upload</button>
            </div>
        </form>
    </div>

</template>

<style></style>