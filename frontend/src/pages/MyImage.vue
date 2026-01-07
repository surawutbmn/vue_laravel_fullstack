<script setup>
const images = [
    {
        id: 1,
        name: 'Image 1',
        label: 'Label 1',
        url: 'https://via.placeholder.com/300x200.png?text=Image+1',
    },
    {
        id: 2,
        name: 'Image 2',
        label: 'Label 2',
        url: 'https://via.placeholder.com/300x200.png?text=Image+2',
    },
    {
        id: 3,
        name: 'Image 3',
        label: 'Label 3',
        url: 'https://via.placeholder.com/300x200.png?text=Image+3',
    },
];
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">
            My Images
        </h1>
        <main>
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div v-for="image in images" :key="image.id" class="bg-white/5 overflow-hidden shadow rounded-lg">
                        <img :src="image.url" alt="Image" class="w-full h-48 object-contain">
                        <div class="px-4 py-4">
                            <h3 class="text-lg font-semibold text-gray-300">{{ image.name }}</h3>
                            <p class="text-sm text-gray-400 mb-4">{{ image.label }}</p>
                            <div class="flex justify-between ">
                                <button type="submit" @click="copyImageUrl(image.url)"
                                    class="rounded-md bg-indigo-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Copy Image Url
                                </button>
                                <button type="submit" @click="deleteImage(image.id)"
                                    class="rounded-md bg-red-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
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