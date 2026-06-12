<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axios';

const images = ref([]);
const copiedImageId = ref(null)
const selectedImage = ref(null)
const showDeleteModal = ref(false)

async function copyImageUrl(url, id) {
    await navigator.clipboard.writeText(url)

    copiedImageId.value = id;
    setTimeout(() => {
        copiedImageId.value = null;
    }, 2000);
}

function openDeleteModal(image) {
    selectedImage.value = image;
    showDeleteModal.value = true;
}

function deleteImage(id) {
    // if (!confirm("Are you sure you want to delete this image?")) {
    //     return;
    // }
    axiosClient.delete(`api/images/${selectedImage.value.id}`)
        .then(res => {
            images.value = images.value.filter(image => image.id != selectedImage.value.id)
            showDeleteModal.value = false;
            selectedImage.value = null;
        })
}

onMounted(() => {
    axiosClient.get('/api/images')
        .then((response) => {
            // console.log((response.data));
            images.value = response.data;
        }
        )
});

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">
            My Images
        </h1>
        <main>
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div v-if="images.length === 0" class="flex justify-center items-center h-64">
                    <p class="text-base text-center bg-white/50 p-5 rounded">
                        No images found. Please upload some images.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div v-for="image in images" :key="image.id"
                        class="p-3 bg-white/5 overflow-hidden rounded shadow-lg">
                        <img :src="image.url" alt="Image" class="w-full h-48 object-contain">
                        <div class="space-y-4 flex flex-col">
                            <h3 class="text-lg font-semibold text-gray-300">{{ image.name }}</h3>
                            <p class="text-sm text-gray-400 mb-4">{{ image.label }}</p>
                            <p class="text-sm text-gray-400 mb-4">{{ image.desc }}</p>
                            <div class="flex justify-between ">
                                <button type="submit" @click="copyImageUrl(image.url, image.id)"
                                    class="rounded-md bg-indigo-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    {{ copiedImageId === image.id ? 'Copied!' : 'Copy URL' }}
                                </button>
                                <button type="submit" @click="openDeleteModal(image)"
                                    class="rounded-md bg-red-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div class="bg-gray-900 rounded-lg p-6 w-96">
                            <h2 class="text-xl font-bold mb-4 text-slate-100">
                                Delete Image
                            </h2>

                            <p class="text-gray-400 mb-6">
                                Are you sure you want to delete
                                <strong>{{ selectedImage?.label }}</strong> ?
                            </p>

                            <div class="flex justify-end gap-3">
                                <button @click="showDeleteModal = false"
                                    class="px-4 py-2 bg-gray-500 text-slate-100 rounded">
                                    Cancel
                                </button>

                                <button @click="deleteImage" class="px-4 py-2 bg-red-600 text-slate-100 rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style></style>